/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Command that allows a liquidity provider to update the details of their existing liquidity commitment.
 * Any field that is left unset or as a default value indicates that this field on the original submission will be left unchanged.
 */
export type v1LiquidityProvisionAmendment = {
    /**
     * New commitment amount.
     */
    commitmentAmount?: string;
    /**
     * New nominated liquidity fee factor.
     */
    fee?: string;
    /**
     * Market that the submitter wants to amend the liquidity commitment for.
     */
    marketId?: string;
    /**
     * New arbitrary reference to be added to every order created out of this liquidity provision submission.
     */
    reference?: string;
};

