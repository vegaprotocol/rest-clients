/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetOracleSpecResponse } from '../models/v2GetOracleSpecResponse';
import type { v2ListOracleDataResponse } from '../models/v2ListOracleDataResponse';
import type { v2ListOracleSpecsResponse } from '../models/v2ListOracleSpecsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataSourcesService {

    /**
     * List oracle data
     * Get a list of all oracle data that have been broadcast to any market
     * @param oracleSpecId Oracle spec ID to list data for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListOracleDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListOracleData(
        oracleSpecId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListOracleDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/oracle/data',
            query: {
                'oracleSpecId': oracleSpecId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get oracle spec
     * Get an oracle spec by ID. Oracle spec IDs can be found by querying markets that use them as a data source
     * @param oracleSpecId Oracle spec ID to request data for.
     * @returns v2GetOracleSpecResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetOracleSpec(
        oracleSpecId: string,
    ): CancelablePromise<v2GetOracleSpecResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/oracle/spec/{oracleSpecId}',
            path: {
                'oracleSpecId': oracleSpecId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List oracle specs
     * Get a list of all oracles specs that are defined against all markets
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListOracleSpecsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListOracleSpecs(
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListOracleSpecsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/oracle/specs',
            query: {
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
