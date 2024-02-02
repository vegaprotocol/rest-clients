/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityProvision } from './vegaLiquidityProvision';

/**
 * Liquidity provider commitment. For API purposes this can report a pending liquidity provision,
 * the current live provision or both in the event that an update has been accepted on the network, but has yet
 * to go live and thus there is still a pending provision that will become active in the next epoch.
 */
export type apiv2LiquidityProvision = {
    /**
     * Liquidity provision that is currently live.
     */
    current?: vegaLiquidityProvision;
    /**
     * Liquidity provision that is currently pending and will go live in the next epoch.
     */
    pending?: vegaLiquidityProvision;
};

