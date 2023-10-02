/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1StopOrderSetup } from './v1StopOrderSetup';

export type v1StopOrdersSubmission = {
    /**
     * Stop order that will be triggered
     * if the price falls below a given trigger price.
     */
    fallsBelow?: v1StopOrderSetup;
    /**
     * Stop order that will be triggered
     * if the price rises above a given trigger price.
     */
    risesAbove?: v1StopOrderSetup;
};

