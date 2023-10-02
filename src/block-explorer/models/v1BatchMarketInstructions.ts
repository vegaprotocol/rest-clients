/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1OrderAmendment } from './v1OrderAmendment';
import type { v1OrderCancellation } from './v1OrderCancellation';
import type { v1OrderSubmission } from './v1OrderSubmission';
import type { v1StopOrdersCancellation } from './v1StopOrdersCancellation';
import type { v1StopOrdersSubmission } from './v1StopOrdersSubmission';

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
};

