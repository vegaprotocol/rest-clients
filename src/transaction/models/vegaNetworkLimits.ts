/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaNetworkLimits = {
    /**
     * Are asset proposals allowed at this point in time.
     */
    canProposeAsset?: boolean;
    /**
     * Are market proposals allowed at this point in time.
     */
    canProposeMarket?: boolean;
    /**
     * Are perpetual market proposals allowed at this point in time.
     */
    canProposePerpetualMarket?: boolean;
    /**
     * Are spot market proposals allowed at this point in time.
     */
    canProposeSpotMarket?: boolean;
    /**
     * Can parties use AMM related transactions.
     */
    canUseAmm?: boolean;
    /**
     * True once the genesis file is loaded.
     */
    genesisLoaded?: boolean;
    /**
     * Are asset proposals enabled on this chain.
     */
    proposeAssetEnabled?: boolean;
    /**
     * Timestamp in Unix nanoseconds at which asset proposals will be enabled (0 indicates not set).
     */
    proposeAssetEnabledFrom?: string;
    /**
     * Are market proposals enabled on this chain.
     */
    proposeMarketEnabled?: boolean;
    /**
     * Timestamp in Unix nanoseconds at which market proposals will be enabled (0 indicates not set).
     */
    proposeMarketEnabledFrom?: string;
};

