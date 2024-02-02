/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2EstimateFeeResponse } from '../models/v2EstimateFeeResponse';
import type { v2EstimateMarginResponse } from '../models/v2EstimateMarginResponse';
import type { v2GetOrderResponse } from '../models/v2GetOrderResponse';
import type { v2GetStopOrderResponse } from '../models/v2GetStopOrderResponse';
import type { v2ListOrdersResponse } from '../models/v2ListOrdersResponse';
import type { v2ListOrderVersionsResponse } from '../models/v2ListOrderVersionsResponse';
import type { v2ListStopOrdersResponse } from '../models/v2ListStopOrdersResponse';
import type { v2ObserveOrdersResponse } from '../models/v2ObserveOrdersResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrdersService {

    /**
     * Estimate fee
     * Estimate the fee that would be incurred for submitting an order
     * with the specified price and size on the market.
     * @param marketId Market ID, used to specify the fee factors.
     * @param price Price at which the potential order is expected to trade.
     * @param size Size at which the potential order is expected to trade.
     * @returns v2EstimateFeeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceEstimateFee(
        marketId: string,
        price: string,
        size: string,
    ): CancelablePromise<v2EstimateFeeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/estimate/fee',
            query: {
                'marketId': marketId,
                'price': price,
                'size': size,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Estimate margin
     * Estimate the margin that would be required for submitting this order
     * @param marketId Market ID for the order.
     * @param partyId Party ID of the order.
     * @param size Size of order.
     * @param price Price of the asset.
     * @param side Order side - indicator for Seller or Buyer side.
     *
     * - SIDE_UNSPECIFIED: Default value, always invalid
     * - SIDE_BUY: Buy order
     * - SIDE_SELL: Sell order
     * @param type Type of the order.
     *
     * - TYPE_UNSPECIFIED: Default value, always invalid
     * - TYPE_LIMIT: Used for Limit orders
     * - TYPE_MARKET: Used for Market orders
     * - TYPE_NETWORK: Used for orders where the initiating party is the network (with distressed parties)
     * @returns v2EstimateMarginResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceEstimateMargin(
        marketId: string,
        partyId: string,
        size: string,
        price: string,
        side: 'SIDE_UNSPECIFIED' | 'SIDE_BUY' | 'SIDE_SELL' = 'SIDE_UNSPECIFIED',
        type: 'TYPE_UNSPECIFIED' | 'TYPE_LIMIT' | 'TYPE_MARKET' | 'TYPE_NETWORK' = 'TYPE_UNSPECIFIED',
    ): CancelablePromise<v2EstimateMarginResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/estimate/margin',
            query: {
                'marketId': marketId,
                'partyId': partyId,
                'side': side,
                'type': type,
                'size': size,
                'price': price,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List order versions
     * Get a list of all versions of an order in the order history
     * @param orderId Order ID to list versions for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListOrderVersionsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListOrderVersions(
        orderId: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListOrderVersionsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/order/versions/{orderId}',
            path: {
                'orderId': orderId,
            },
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

    /**
     * Get order
     * Get an order by its ID. An order's ID will be the SHA3-256 hash of the signature that the order was submitted with
     * @param orderId Order ID to retrieve order information for.
     * @param version Historic version number of the order to return. If not set, the most current version will be returned.
     * @returns v2GetOrderResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetOrder(
        orderId: string,
        version?: number,
    ): CancelablePromise<v2GetOrderResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/order/{orderId}',
            path: {
                'orderId': orderId,
            },
            query: {
                'version': version,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List orders
     * Get a list of orders that match the given filters
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param filterStatuses Restrict orders to those with the given statuses.
     *
     * - STATUS_UNSPECIFIED: Default value, always invalid
     * - STATUS_ACTIVE: Used for active unfilled or partially filled orders
     * - STATUS_EXPIRED: Used for expired GTT orders
     * - STATUS_CANCELLED: Used for orders cancelled by the party that created the order
     * - STATUS_STOPPED: Used for unfilled FOK or IOC orders, and for orders that were stopped by the network
     * - STATUS_FILLED: Used for closed fully filled orders
     * - STATUS_REJECTED: Used for orders when not enough collateral was available to fill the margin requirements
     * - STATUS_PARTIALLY_FILLED: Used for closed partially filled IOC orders
     * - STATUS_PARKED: Order has been removed from the order book and has been parked,
     * this applies to pegged orders and liquidity orders (orders created from a liquidity provision shape)
     * @param filterTypes Restrict orders to those with the given types.
     *
     * - TYPE_UNSPECIFIED: Default value, always invalid
     * - TYPE_LIMIT: Used for Limit orders
     * - TYPE_MARKET: Used for Market orders
     * - TYPE_NETWORK: Used for orders where the initiating party is the network (with distressed parties)
     * @param filterTimeInForces Restrict orders to those with the given Time In Force.
     *
     * - TIME_IN_FORCE_UNSPECIFIED: Default value for TimeInForce, can be valid for an amend
     * - TIME_IN_FORCE_GTC: Good until cancelled, the order trades any amount and as much as possible
     * and remains on the book until it either trades completely or is cancelled
     * - TIME_IN_FORCE_GTT: Good until specified time, this order type trades any amount and as much as possible
     * and remains on the book until it either trades completely, is cancelled, or expires at a set time
     * NOTE: this may in future be multiple types or have sub types for orders that provide different ways of specifying expiry
     * - TIME_IN_FORCE_IOC: Immediate or cancel, the order trades any amount and as much as possible
     * but does not remain on the book (whether it trades or not)
     * - TIME_IN_FORCE_FOK: Fill or kill, the order either trades completely i.e. remainingSize == 0 after adding,
     * or not at all, and does not remain on the book if it doesn't trade
     * - TIME_IN_FORCE_GFA: Good for auction, this order is only accepted during an auction period
     * - TIME_IN_FORCE_GFN: Good for normal, this order is only accepted during normal trading (that can be continuous trading or frequent batched auctions)
     * @param filterExcludeLiquidity Indicator if liquidity provisions should be included or not in the list.
     * @param filterPartyIds Restrict orders to those placed by the given party IDs.
     * @param filterMarketIds Restrict orders to those placed on the given market IDs.
     * @param filterReference Restrict orders to those with the given reference.
     * @param filterDateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param filterDateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @param filterLiveOnly Restrict orders to those that are live. If not set, it is treated as being false.
     * @returns v2ListOrdersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListOrders(
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        filterStatuses?: Array<'STATUS_UNSPECIFIED' | 'STATUS_ACTIVE' | 'STATUS_EXPIRED' | 'STATUS_CANCELLED' | 'STATUS_STOPPED' | 'STATUS_FILLED' | 'STATUS_REJECTED' | 'STATUS_PARTIALLY_FILLED' | 'STATUS_PARKED'>,
        filterTypes?: Array<'TYPE_UNSPECIFIED' | 'TYPE_LIMIT' | 'TYPE_MARKET' | 'TYPE_NETWORK'>,
        filterTimeInForces?: Array<'TIME_IN_FORCE_UNSPECIFIED' | 'TIME_IN_FORCE_GTC' | 'TIME_IN_FORCE_GTT' | 'TIME_IN_FORCE_IOC' | 'TIME_IN_FORCE_FOK' | 'TIME_IN_FORCE_GFA' | 'TIME_IN_FORCE_GFN'>,
        filterExcludeLiquidity?: boolean,
        filterPartyIds?: Array<string>,
        filterMarketIds?: Array<string>,
        filterReference?: string,
        filterDateRangeStartTimestamp?: string,
        filterDateRangeEndTimestamp?: string,
        filterLiveOnly?: boolean,
    ): CancelablePromise<v2ListOrdersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/orders',
            query: {
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'filter.statuses': filterStatuses,
                'filter.types': filterTypes,
                'filter.timeInForces': filterTimeInForces,
                'filter.excludeLiquidity': filterExcludeLiquidity,
                'filter.partyIds': filterPartyIds,
                'filter.marketIds': filterMarketIds,
                'filter.reference': filterReference,
                'filter.dateRange.startTimestamp': filterDateRangeStartTimestamp,
                'filter.dateRange.endTimestamp': filterDateRangeEndTimestamp,
                'filter.liveOnly': filterLiveOnly,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get stop order
     * Get a stop order by its ID. A stop order's ID will be the SHA3-256 hash of the signature that the order was submitted with.
     * A stop order's ID is likely to be different from the ID of the order that will be submitted when the stop is triggered.
     * @param orderId Order ID to retrieve order information for.
     * @returns v2GetStopOrderResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetStopOrder(
        orderId: string,
    ): CancelablePromise<v2GetStopOrderResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stoporder/{orderId}',
            path: {
                'orderId': orderId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List stop orders
     * Get a list of stop orders that match the given filters
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param filterStatuses Restrict orders to those with the given statuses.
     *
     * - STATUS_UNSPECIFIED: Never valid
     * - STATUS_PENDING: Pending to be executed once the trigger is breached
     * - STATUS_CANCELLED: Cancelled by the user
     * - STATUS_STOPPED: Stopped by the network, e.g: OCO on the other side has been triggered
     * - STATUS_TRIGGERED: Stop order has been triggered and generated an order
     * - STATUS_EXPIRED: Stop order has expired
     * - STATUS_REJECTED: Stop order was rejected at submission
     * @param filterExpiryStrategies Restrict orders to those with the given expiry strategies.
     *
     * - EXPIRY_STRATEGY_UNSPECIFIED: Never valid
     * - EXPIRY_STRATEGY_CANCELS: Stop order should be cancelled if the expiry time is reached.
     * - EXPIRY_STRATEGY_SUBMIT: Order should be submitted if the expiry time is reached.
     * @param filterDateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param filterDateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @param filterPartyIds Restrict orders to those placed by the given party IDs.
     * @param filterMarketIds Restrict orders to those placed on the given market IDs.
     * @param filterLiveOnly Live stop orders only.
     * @returns v2ListStopOrdersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListStopOrders(
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        filterStatuses?: Array<'STATUS_UNSPECIFIED' | 'STATUS_PENDING' | 'STATUS_CANCELLED' | 'STATUS_STOPPED' | 'STATUS_TRIGGERED' | 'STATUS_EXPIRED' | 'STATUS_REJECTED'>,
        filterExpiryStrategies?: Array<'EXPIRY_STRATEGY_UNSPECIFIED' | 'EXPIRY_STRATEGY_CANCELS' | 'EXPIRY_STRATEGY_SUBMIT'>,
        filterDateRangeStartTimestamp?: string,
        filterDateRangeEndTimestamp?: string,
        filterPartyIds?: Array<string>,
        filterMarketIds?: Array<string>,
        filterLiveOnly?: boolean,
    ): CancelablePromise<v2ListStopOrdersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stoporders',
            query: {
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'filter.statuses': filterStatuses,
                'filter.expiryStrategies': filterExpiryStrategies,
                'filter.dateRange.startTimestamp': filterDateRangeStartTimestamp,
                'filter.dateRange.endTimestamp': filterDateRangeEndTimestamp,
                'filter.partyIds': filterPartyIds,
                'filter.marketIds': filterMarketIds,
                'filter.liveOnly': filterLiveOnly,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe orders
     * Subscribe to a stream of orders
     * @param marketIds Restrict orders to those placed on the given markets.
     * @param partyIds Restrict orders to those placed on the by the given parties.
     * @param excludeLiquidity Whether liquidity orders should be excluded from the stream. If not set, liquidity orders will be included.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveOrders(
        marketIds?: Array<string>,
        partyIds?: Array<string>,
        excludeLiquidity?: boolean,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveOrdersResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/orders',
            query: {
                'marketIds': marketIds,
                'partyIds': partyIds,
                'excludeLiquidity': excludeLiquidity,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
