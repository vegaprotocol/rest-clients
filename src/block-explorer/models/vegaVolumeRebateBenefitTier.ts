/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaVolumeRebateBenefitTier = {
    /**
     * Additional rebate factor, based on the 'trade value for fee purposes', that a party at this tier will receive when they are the maker side of a trade.
     */
    additionalMakerRebate?: string;
    /**
     * Fraction of a party's maker volume required for a party to access this tier.
     */
    minimumPartyMakerVolumeFraction?: string;
    /**
     * The tier number. It's set by the core, and used in the party fee stats API.
     */
    tierNumber?: string;
};

