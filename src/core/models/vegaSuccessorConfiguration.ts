/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configuration required to turn a new market proposal in to a successor market proposal.
 */
export type vegaSuccessorConfiguration = {
    /**
     * A decimal value between or equal to 0 and 1, specifying the fraction of the insurance pool balance that is carried over from the parent market to the successor.
     */
    insurancePoolFraction?: string;
    /**
     * ID of the market that the successor should take over from.
     */
    parentMarketId?: string;
};

