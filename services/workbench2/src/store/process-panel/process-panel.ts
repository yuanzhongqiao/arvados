// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

import { WorkflowInputsData } from 'models/workflow';
import { RouterState } from "react-router-redux";
import { matchProcessRoute } from "routes/routes";
import { ProcessIOParameter } from "views/process-panel/process-io-card";
import { CommandOutputParameter } from 'cwlts/mappings/v1.0/CommandOutputParameter';
import { CollectionFile } from 'models/collection-file';

export type OutputDetails = {
    raw?: any;
    pdh?: string;
    failedToLoadOutputCollection?: boolean;
}

export interface CUDAFeatures {
    DriverVersion: string;
    HardwareCapability: string;
    DeviceCount: number;
}

export interface NodeInstanceType {
    Name: string;
    ProviderType: string;
    VCPUs: number;
    RAM: number;
    Scratch: number;
    IncludedScratch: number;
    AddedScratch: number;
    Price: number;
    Preemptible: boolean;
    CUDA: CUDAFeatures;
};

export interface NodeInfo {
    nodeInfo: NodeInstanceType | null;
};

export interface UsageReport {
    usageReport: CollectionFile | null;
};

export interface ProcessPanel {
    containerRequestUuid: string;
    filters: { [status: string]: boolean };
    inputRaw: WorkflowInputsData | null;
    inputParams: ProcessIOParameter[] | null;
    outputData: OutputDetails | null;
    outputDefinitions: CommandOutputParameter[];
    outputParams: ProcessIOParameter[] | null;
    nodeInfo: NodeInstanceType | null;
    usageReport: CollectionFile | null;
}

export const getProcessPanelCurrentUuid = (router: RouterState) => {
    const pathname = router.location ? router.location.pathname : '';
    const match = matchProcessRoute(pathname);
    return match ? match.params.id : undefined;
};
