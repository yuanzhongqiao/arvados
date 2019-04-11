// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

package router

import (
	"context"
	"net/http"

	"git.curoverse.com/arvados.git/lib/controller/federation"
	"git.curoverse.com/arvados.git/sdk/go/arvados"
	"git.curoverse.com/arvados.git/sdk/go/auth"
	"git.curoverse.com/arvados.git/sdk/go/ctxlog"
	"github.com/julienschmidt/httprouter"
)

type router struct {
	mux *httprouter.Router
	fed federation.Interface
}

func New(cluster *arvados.Cluster) *router {
	rtr := &router{
		mux: httprouter.New(),
		fed: federation.New(cluster),
	}
	rtr.addRoutes(cluster)
	return rtr
}

func (rtr *router) addRoutes(cluster *arvados.Cluster) {
	for _, route := range []struct {
		endpoint    arvados.APIEndpoint
		defaultOpts func() interface{}
		exec        func(ctx context.Context, opts interface{}) (interface{}, error)
	}{
		{
			arvados.EndpointCollectionCreate,
			func() interface{} { return &arvados.CreateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.CollectionCreate(ctx, *opts.(*arvados.CreateOptions))
			},
		},
		{
			arvados.EndpointCollectionUpdate,
			func() interface{} { return &arvados.UpdateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.CollectionUpdate(ctx, *opts.(*arvados.UpdateOptions))
			},
		},
		{
			arvados.EndpointCollectionGet,
			func() interface{} { return &arvados.GetOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.CollectionGet(ctx, *opts.(*arvados.GetOptions))
			},
		},
		{
			arvados.EndpointCollectionList,
			func() interface{} { return &arvados.ListOptions{Limit: -1} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.CollectionList(ctx, *opts.(*arvados.ListOptions))
			},
		},
		{
			arvados.EndpointCollectionDelete,
			func() interface{} { return &arvados.DeleteOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.CollectionDelete(ctx, *opts.(*arvados.DeleteOptions))
			},
		},
		{
			arvados.EndpointContainerCreate,
			func() interface{} { return &arvados.CreateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerCreate(ctx, *opts.(*arvados.CreateOptions))
			},
		},
		{
			arvados.EndpointContainerUpdate,
			func() interface{} { return &arvados.UpdateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerUpdate(ctx, *opts.(*arvados.UpdateOptions))
			},
		},
		{
			arvados.EndpointContainerGet,
			func() interface{} { return &arvados.GetOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerGet(ctx, *opts.(*arvados.GetOptions))
			},
		},
		{
			arvados.EndpointContainerList,
			func() interface{} { return &arvados.ListOptions{Limit: -1} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerList(ctx, *opts.(*arvados.ListOptions))
			},
		},
		{
			arvados.EndpointContainerDelete,
			func() interface{} { return &arvados.DeleteOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerDelete(ctx, *opts.(*arvados.DeleteOptions))
			},
		},
		{
			arvados.EndpointContainerLock,
			func() interface{} {
				return &arvados.GetOptions{Select: []string{"uuid", "state", "priority", "auth_uuid", "locked_by_uuid"}}
			},
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerLock(ctx, *opts.(*arvados.GetOptions))
			},
		},
		{
			arvados.EndpointContainerUnlock,
			func() interface{} {
				return &arvados.GetOptions{Select: []string{"uuid", "state", "priority", "auth_uuid", "locked_by_uuid"}}
			},
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.ContainerUnlock(ctx, *opts.(*arvados.GetOptions))
			},
		},
		{
			arvados.EndpointSpecimenCreate,
			func() interface{} { return &arvados.CreateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.SpecimenCreate(ctx, *opts.(*arvados.CreateOptions))
			},
		},
		{
			arvados.EndpointSpecimenUpdate,
			func() interface{} { return &arvados.UpdateOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.SpecimenUpdate(ctx, *opts.(*arvados.UpdateOptions))
			},
		},
		{
			arvados.EndpointSpecimenGet,
			func() interface{} { return &arvados.GetOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.SpecimenGet(ctx, *opts.(*arvados.GetOptions))
			},
		},
		{
			arvados.EndpointSpecimenList,
			func() interface{} { return &arvados.ListOptions{Limit: -1} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.SpecimenList(ctx, *opts.(*arvados.ListOptions))
			},
		},
		{
			arvados.EndpointSpecimenDelete,
			func() interface{} { return &arvados.DeleteOptions{} },
			func(ctx context.Context, opts interface{}) (interface{}, error) {
				return rtr.fed.SpecimenDelete(ctx, *opts.(*arvados.DeleteOptions))
			},
		},
	} {
		route := route
		methods := []string{route.endpoint.Method}
		if route.endpoint.Method == "PATCH" {
			methods = append(methods, "PUT")
		}
		for _, method := range methods {
			rtr.mux.HandlerFunc(method, "/"+route.endpoint.Path, func(w http.ResponseWriter, req *http.Request) {
				params, err := rtr.loadRequestParams(req, route.endpoint.AttrsKey)
				if err != nil {
					rtr.sendError(w, err)
					return
				}
				opts := route.defaultOpts()
				err = rtr.transcode(params, opts)
				if err != nil {
					rtr.sendError(w, err)
					return
				}
				respOpts, err := rtr.responseOptions(opts)
				if err != nil {
					rtr.sendError(w, err)
					return
				}

				creds := auth.CredentialsFromRequest(req)
				ctx := req.Context()
				ctx = context.WithValue(ctx, auth.ContextKeyCredentials, creds)
				ctx = arvados.ContextWithRequestID(ctx, req.Header.Get("X-Request-Id"))
				resp, err := route.exec(ctx, opts)
				if err != nil {
					ctxlog.FromContext(ctx).WithError(err).Infof("returning error response for %#v", err)
					rtr.sendError(w, err)
					return
				}
				rtr.sendResponse(w, resp, respOpts)
			})
		}
	}
}

func (rtr *router) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	if m := r.FormValue("_method"); m != "" {
		r2 := *r
		r = &r2
		r.Method = m
	}
	rtr.mux.ServeHTTP(w, r)
}
