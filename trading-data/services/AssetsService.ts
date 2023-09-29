/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetAssetResponse } from '../models/v2GetAssetResponse';
import type { v2GetDepositResponse } from '../models/v2GetDepositResponse';
import type { v2GetWithdrawalResponse } from '../models/v2GetWithdrawalResponse';
import type { v2ListAssetsResponse } from '../models/v2ListAssetsResponse';
import type { v2ListDepositsResponse } from '../models/v2ListDepositsResponse';
import type { v2ListWithdrawalsResponse } from '../models/v2ListWithdrawalsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AssetsService {

    /**
     * Get asset
     * Get a single asset using its ID. Use the assets list query to get an asset's ID
     * @param assetId Asset ID to get data for.
     * @returns v2GetAssetResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetAsset(
        assetId: string,
    ): CancelablePromise<v2GetAssetResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/asset/{assetId}',
            path: {
                'assetId': assetId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List assets
     * Get a list of assets available on the Vega network
     * @param assetId Optional asset ID to list data for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListAssetsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAssets(
        assetId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListAssetsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/assets',
            query: {
                'assetId': assetId,
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
     * Get deposit
     * Get a deposit by its ID
     * @param id Deposit ID to return data for.
     * @returns v2GetDepositResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetDeposit(
        id: string,
    ): CancelablePromise<v2GetDepositResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/deposit/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List deposits
     * Get a list of deposits for a given party.
     * If a date range is provided, filtering will be based on the last time the deposit
     * has been updated in Vega time.
     * @param partyId Restrict deposits to those made by the given party ID.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns v2ListDepositsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListDeposits(
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<v2ListDepositsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/deposits',
            query: {
                'partyId': partyId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get withdrawal
     * Get a withdrawal by its ID. A withdrawal's ID will be the SHA3-256 hash of the signature that the withdrawal was submitted with
     * @param id Withdrawal ID to retrieve data for.
     * @returns v2GetWithdrawalResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetWithdrawal(
        id: string,
    ): CancelablePromise<v2GetWithdrawalResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/withdrawal/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List withdrawals
     * Get a list of withdrawals for a given party
     * @param partyId Restrict withdrawals to those made by this party ID.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns v2ListWithdrawalsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListWithdrawals(
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<v2ListWithdrawalsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/withdrawals',
            query: {
                'partyId': partyId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
