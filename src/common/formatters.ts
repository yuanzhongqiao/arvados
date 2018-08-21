// Copyright (C) The Arvados Authors. All rights reserved.
//
// SPDX-License-Identifier: AGPL-3.0

export const formatDate = (isoDate?: string) => {
    if (isoDate) {
        const date = new Date(isoDate);
        const text = date.toLocaleString();
        return text === 'Invalid Date' ? "" : text;
    }
    return "";
};

export const formatFileSize = (size?: number) => {
    if (typeof size === "number") {
        for (const { base, unit } of FILE_SIZES) {
            if (size >= base) {
                return `${(size / base).toFixed()} ${unit}`;
            }
        }
    }
    return "";
};

export const formatProgress = (loaded: number, total: number) => {
    const progress = loaded >= 0 && total > 0 ? loaded * 100 / total : 0;
    return `${progress.toFixed(2)}%`;
};

export function formatUploadSpeed(prevLoaded: number, loaded: number, prevTime: number, currentTime: number) {
    const speed = loaded > prevLoaded && currentTime > prevTime
        ? (loaded - prevLoaded) / (currentTime - prevTime)
        : 0;
    return `${(speed / 1000).toFixed(2)} KB/s`;
}

const FILE_SIZES = [
    {
        base: 1000000000000,
        unit: "TB"
    },
    {
        base: 1000000000,
        unit: "GB"
    },
    {
        base: 1000000,
        unit: "MB"
    },
    {
        base: 1000,
        unit: "KB"
    },
    {
        base: 1,
        unit: "B"
    }
];
