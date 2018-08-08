// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import { reset } from "redux-form";

import { ContextMenuActionSet } from "../context-menu-action-set";
import { projectActions } from "../../../store/project/project-action";
import { NewProjectIcon } from "../../../components/icon/icon";
import { PROJECT_CREATE_DIALOG } from "../../dialog-create/dialog-project-create";

export const rootProjectActionSet: ContextMenuActionSet =  [[{
    icon: NewProjectIcon,
    name: "New project",
    execute: (dispatch, resource) => {
        dispatch(reset(PROJECT_CREATE_DIALOG));
        dispatch(projectActions.OPEN_PROJECT_CREATOR({ ownerUuid: resource.uuid }));
    }
}]];
