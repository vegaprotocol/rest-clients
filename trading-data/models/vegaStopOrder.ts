/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StopOrderExpiryStrategy } from './StopOrderExpiryStrategy';
import type { StopOrderRejectionReason } from './StopOrderRejectionReason';
import type { StopOrderTriggerDirection } from './StopOrderTriggerDirection';
import type { vegaStopOrderStatus } from './vegaStopOrderStatus';

export type vegaStopOrder = {
    /**
     * Creation time of the stop order.
     */
    createdAt?: string;
    /**
     * Optional expiry timestamp.
     */
    expiresAt?: string;
    /**
     * Strategy to adopt if the expiry time is reached.
     */
    expiryStrategy?: StopOrderExpiryStrategy;
    id?: string;
    /**
     * ID of the market the stop order is submitted to.
     */
    marketId?: string;
    ocoLinkId?: string;
    /**
     * ID of the order created once the trigger is hit.
     */
    orderId?: string;
    /**
     * ID of the party that submitted this stop order.
     */
    partyId?: string;
    /**
     * Fixed price at which the order will be submitted.
     */
    price?: string;
    rejectionReason?: StopOrderRejectionReason;
    /**
     * Status of the stop order.
     */
    status?: vegaStopOrderStatus;
    trailingPercentOffset?: string;
    /**
     * Trigger direction for this stop order.
     */
    triggerDirection?: StopOrderTriggerDirection;
    /**
     * Last update of this stop order.
     */
    updatedAt?: string;
};

