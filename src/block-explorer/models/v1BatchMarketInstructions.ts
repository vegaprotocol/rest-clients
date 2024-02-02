/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1OrderAmendment } from './v1OrderAmendment';
import type { v1OrderCancellation } from './v1OrderCancellation';
import type { v1OrderSubmission } from './v1OrderSubmission';
import type { v1StopOrdersCancellation } from './v1StopOrdersCancellation';
import type { v1StopOrdersSubmission } from './v1StopOrdersSubmission';
import type { v1UpdateMarginMode } from './v1UpdateMarginMode';

/**
 * A command that allows the submission of a batch market instruction which wraps up multiple market instructions into a single transaction.
 * These instructions are then processed sequentially in the following order:
 * - OrderCancellation
 * - OrderAmendment
 * - OrderSubmission
 * - StopOrderSubmission
 * where the maximum allow of instructions in a batch is controlled by the network parameter "spam.protection.max.batchSize".
 */
export type v1BatchMarketInstructions = {
    /**
     * List of order amendments to be processed sequentially.
     */
    amendments?: Array<v1OrderAmendment>;
    /**
     * List of order cancellations to be processed sequentially.
     */
    cancellations?: Array<v1OrderCancellation>;
    /**
     * List of stop order cancellations to be processed sequentially.
     */
    stopOrdersCancellation?: Array<v1StopOrdersCancellation>;
    /**
     * List of stop order submissions to be processed sequentially.
     */
    stopOrdersSubmission?: Array<v1StopOrdersSubmission>;
    /**
     * List of order submissions to be processed sequentially.
     */
    submissions?: Array<v1OrderSubmission>;
    updateMarginMode?: Array<v1UpdateMarginMode>;
};

