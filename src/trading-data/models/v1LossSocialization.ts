/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1LossSocializationType } from './v1LossSocializationType';

export type v1LossSocialization = {
    amount?: string;
    /**
     * Type of transfer that resulted in loss socialization.
     */
    lossType?: v1LossSocializationType;
    marketId?: string;
    partyId?: string;
};

