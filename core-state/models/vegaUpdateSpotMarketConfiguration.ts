/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquiditySLAParameters } from './vegaLiquiditySLAParameters';
import type { vegaLogNormalRiskModel } from './vegaLogNormalRiskModel';
import type { vegaPriceMonitoringParameters } from './vegaPriceMonitoringParameters';
import type { vegaSimpleModelParams } from './vegaSimpleModelParams';
import type { vegaTargetStakeParameters } from './vegaTargetStakeParameters';

export type vegaUpdateSpotMarketConfiguration = {
    /**
     * Log normal risk model parameters, valid only if MODEL_LOG_NORMAL is selected.
     */
    logNormal?: vegaLogNormalRiskModel;
    /**
     * Optional spot market metadata, tags.
     */
    metadata?: Array<string>;
    /**
     * Price monitoring parameters.
     */
    priceMonitoringParameters?: vegaPriceMonitoringParameters;
    /**
     * Simple risk model parameters, valid only if MODEL_SIMPLE is selected.
     */
    simple?: vegaSimpleModelParams;
    /**
     * Specifies the liquidity provision SLA parameters.
     */
    slaParams?: vegaLiquiditySLAParameters;
    /**
     * Specifies parameters related to target stake calculation.
     */
    targetStakeParameters?: vegaTargetStakeParameters;
};

