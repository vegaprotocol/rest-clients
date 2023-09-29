/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2InfoResponse } from '../models/v2InfoResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NodeInformationService {

    /**
     * Data node information
     * Get information about the data node.
     * Response contains a semver formatted version of the data node and the commit hash, from which the data node was built
     * @returns v2InfoResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceInfo(): CancelablePromise<v2InfoResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/info',
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
