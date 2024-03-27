// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import { Dispatch } from "redux";
import { ContextMenuItem } from "components/context-menu/context-menu";
import { ContextMenuResource } from "store/context-menu/context-menu-actions";

export enum ContextMenuActionNames {
    ACCOUNT_SETTINGS = 'Account settings',
    ACTIVATE_USER = 'Activate user',
    ADD_TO_FAVORITES = 'Add to Favorites',
    ADD_TO_PUBLIC_FAVORITES = 'Add to public favorites',
    ATTRIBUTES = 'Attributes',
    API_DETAILS = 'API Details',
    CANCEL = 'CANCEL',
    COPY_AND_RERUN_PROCESS = 'Copy and re-run process',
    COPY_SELECTED_INTO_EXISTING_COLLECTION = 'Copy selected into existing collection',
    COPY_SELECTED_INTO_SEPARATE_COLLECTIONS = 'Copy selected into separate collections',
    COPY_SELECTED_INTO_NEW_COLLECTION = 'Copy selected into new collection',
    COPY_TO_CLIPBOARD = 'Copy to clipboard',
    DEACTIVATE_USER = 'Deactivate user',
    DELETE_WORKFLOW = 'Delete Workflow',
    EDIT_COLLECTION = 'Edit collection',
    EDIT_PROCESS = 'Edit process',
    EDIT_PROJECT = 'Edit project',
    FREEZE_PROJECT = 'Freeze Project',
    LOGIN_AS_USER = 'Login as user',
    MAKE_A_COPY = 'Make a copy',
    MANAGE = 'Manage',
    MOVE_SELECTED_INTO_EXISTING_COLLECTION = 'Move selected into existing collection',
    MOVE_SELECTED_INTO_NEW_COLLECTION = 'Move selected into new collection',
    MOVE_SELECTED_INTO_SEPARATE_COLLECTIONS = 'Move selected into separate collections',
    MOVE_TO = 'Move to',
    MOVE_TO_TRASH = 'Move to trash',
    NEW_COLLECTION = 'New Collection',
    NEW_PROJECT = 'New project',
    OPEN_IN_NEW_TAB = 'Open in new tab',
    OPEN_W_3RD_PARTY_CLIENT = 'Open with 3rd party client',
    OUTPUTS = 'Outputs',
    READ = 'Read',
    REMOVE = 'Remove',
    REMOVE_SELECTED = 'Remove selected',
    RENAME = 'Rename',
    RESTORE_VERSION = 'Restore version',
    RUN_WORKFLOW = 'Run Workflow',
    SELECT_ALL = 'Select all',
    SETUP_USER = 'Setup user',
    SHARE = 'Share',
    UNSELECT_ALL = 'Unselect all',
    VIEW_DETAILS = 'View details',
    WRITE = 'Write',
}

export interface ContextMenuAction extends ContextMenuItem {
    execute(dispatch: Dispatch, resources: ContextMenuResource[], state?: any): void;
}

export type ContextMenuActionSet = Array<Array<ContextMenuAction>>;
