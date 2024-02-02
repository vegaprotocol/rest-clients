/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaCancelTransfer } from './vegaCancelTransfer';
import type { vegaNewFreeform } from './vegaNewFreeform';
import type { vegaNewMarket } from './vegaNewMarket';
import type { vegaNewSpotMarket } from './vegaNewSpotMarket';
import type { vegaNewTransfer } from './vegaNewTransfer';
import type { vegaUpdateAsset } from './vegaUpdateAsset';
import type { vegaUpdateMarket } from './vegaUpdateMarket';
import type { vegaUpdateMarketState } from './vegaUpdateMarketState';
import type { vegaUpdateNetworkParameter } from './vegaUpdateNetworkParameter';
import type { vegaUpdateReferralProgram } from './vegaUpdateReferralProgram';
import type { vegaUpdateSpotMarket } from './vegaUpdateSpotMarket';
import type { vegaUpdateVolumeDiscountProgram } from './vegaUpdateVolumeDiscountProgram';

export type vegaBatchProposalTermsChange = {
    /**
     * Proposal change to cancel a governance initiated transfe.
     */
    cancelTransfer?: vegaCancelTransfer;
    /**
     * Timestamp as Unix time in seconds when proposal terms gets enacted if proposal passed the vote,
     * constrained by `minEnact` and `maxEnact` network parameters.
     */
    enactmentTimestamp?: string;
    /**
     * Proposal change for a freeform request, which can be voted on but does not change the behaviour of the system,
     * and can be used to gauge community sentiment.
     */
    newFreeform?: vegaNewFreeform;
    /**
     * Proposal change for creating new futures market.
     */
    newMarket?: vegaNewMarket;
    /**
     * Proposal change for creating new spot market.
     */
    newSpotMarket?: vegaNewSpotMarket;
    /**
     * Proposal change for a governance initiated transfer.
     */
    newTransfer?: vegaNewTransfer;
    /**
     * Proposal change for updating an asset.
     */
    updateAsset?: vegaUpdateAsset;
    /**
     * Proposal change for modifying an existing futures market.
     */
    updateMarket?: vegaUpdateMarket;
    /**
     * Proposal change for updating the state of a market.
     */
    updateMarketState?: vegaUpdateMarketState;
    /**
     * Proposal change for updating Vega network parameters.
     */
    updateNetworkParameter?: vegaUpdateNetworkParameter;
    /**
     * Proposal change for updating the referral program.
     */
    updateReferralProgram?: vegaUpdateReferralProgram;
    /**
     * Proposal change for modifying an existing spot market.
     */
    updateSpotMarket?: vegaUpdateSpotMarket;
    /**
     * Proposal change for updating the volume discount program.
     */
    updateVolumeDiscountProgram?: vegaUpdateVolumeDiscountProgram;
};

