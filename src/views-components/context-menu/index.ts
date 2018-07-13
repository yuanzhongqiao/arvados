// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import { ContextMenuHOC, addMenuItemsSet } from "./context-menu";
import { projectItemSet } from "./project-item-set";
import { rootProjectItemSet } from "./root-project-item-set";

export default ContextMenuHOC;

export enum ContextMenuKind {
    RootProject = "RootProject",
    Project = "Project"
}

addMenuItemsSet(ContextMenuKind.RootProject, rootProjectItemSet);
addMenuItemsSet(ContextMenuKind.Project, projectItemSet);