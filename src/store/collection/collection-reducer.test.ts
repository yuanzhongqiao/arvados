// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import collectionsReducer from "./collection-reducer";
import actions from "./collection-action";

describe('collection-reducer', () => {
    it('should add new collection to the list', () => {
        const initialState = undefined;
        const collection = {
            name: 'test',
            href: 'href',
            createdAt: '2018-01-01',
            modifiedAt: '2018-01-01',
            ownerUuid: 'owner-test123',
            uuid: 'test123',
            kind: ""
        };

        const state = collectionsReducer(initialState, actions.CREATE_COLLECTION(collection));
        expect(state).toEqual([collection]);
    });

    it('should load collections', () => {
        const initialState = undefined;
        const collection = {
            name: 'test',
            href: 'href',
            createdAt: '2018-01-01',
            modifiedAt: '2018-01-01',
            ownerUuid: 'owner-test123',
            uuid: 'test123',
            kind: ""
        };

        const collections = [collection, collection];
        const state = collectionsReducer(initialState, actions.COLLECTIONS_SUCCESS({ collections }));
        expect(state).toEqual([{
                active: false,
                open: false,
                id: "test123",
                items: [],
                data: collection,
                status: 0
            }, {
                active: false,
                open: false,
                id: "test123",
                items: [],
                data: collection,
                status: 0
            }
        ]);
    });
});
