/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaERC20SignerAdded } from './vegaERC20SignerAdded';
import type { vegaERC20SignerRemoved } from './vegaERC20SignerRemoved';
import type { vegaERC20ThresholdSet } from './vegaERC20ThresholdSet';

export type vegaERC20MultiSigEvent = {
    block?: string;
    /**
     * ID of the source chain for this event.
     */
    chainId?: string;
    index?: string;
    signerAdded?: vegaERC20SignerAdded;
    signerRemoved?: vegaERC20SignerRemoved;
    thresholdSet?: vegaERC20ThresholdSet;
};

