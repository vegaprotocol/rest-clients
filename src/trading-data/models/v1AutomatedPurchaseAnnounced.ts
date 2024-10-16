/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

export type v1AutomatedPurchaseAnnounced = {
    /**
     * Amount being exchanged.
     */
    amount?: string;
    /**
     * Token being exchanged.
     */
    from?: string;
    /**
     * The source account type.
     */
    fromAccountType?: vegaAccountType;
    /**
     * The identifier of the spot market where the auction is being scheduled.
     */
    marketId?: string;
    /**
     * The target account type.
     */
    toAccountType?: vegaAccountType;
};

