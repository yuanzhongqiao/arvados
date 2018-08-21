// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import { ResourceKind, TrashResource } from "./resource";

export interface GroupResource extends TrashResource {
    kind: ResourceKind.GROUP;
    name: string;
    groupClass: GroupClass | null;
    description: string;
    properties: string;
    writeableBy: string[];
}

export enum GroupClass {
    PROJECT = "project"
}
