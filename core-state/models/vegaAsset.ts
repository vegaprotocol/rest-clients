/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAssetDetails } from './vegaAssetDetails';
import type { vegaAssetStatus } from './vegaAssetStatus';

export type vegaAsset = {
    /**
     * Definition of the external source for this asset.
     */
    details?: vegaAssetDetails;
    /**
     * Internal identifier of the asset.
     */
    id?: string;
    /**
     * Status of the asset.
     */
    status?: vegaAssetStatus;
};

