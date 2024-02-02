/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1StopOrderSetup } from './v1StopOrderSetup';

/**
 * A command that allows a party to submit a stop order for a given market.
 * A stop order is a normal order that remains off the order book and is only submitted if a given trigger is breached from a particular direction.
 * If both rises-above and falls-below are configured, then if one is triggered the other will be cancelled (OCO).
 */
export type v1StopOrdersSubmission = {
    /**
     * Stop order that will be triggered if the price falls below a given trigger price.
     */
    fallsBelow?: v1StopOrderSetup;
    /**
     * Stop order that will be triggered if the price rises above a given trigger price.
     */
    risesAbove?: v1StopOrderSetup;
};

