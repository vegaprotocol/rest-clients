/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityMonitoringParameters } from './vegaLiquidityMonitoringParameters';
import type { vegaLiquiditySLAParameters } from './vegaLiquiditySLAParameters';
import type { vegaLogNormalRiskModel } from './vegaLogNormalRiskModel';
import type { vegaPriceMonitoringParameters } from './vegaPriceMonitoringParameters';
import type { vegaSimpleModelParams } from './vegaSimpleModelParams';
import type { vegaUpdateInstrumentConfiguration } from './vegaUpdateInstrumentConfiguration';

export type vegaUpdateMarketConfiguration = {
    /**
     * Updated futures market instrument configuration.
     */
    instrument?: vegaUpdateInstrumentConfiguration;
    /**
     * Linear slippage factor is used to cap the slippage component of maintenance margin - it is applied to the slippage volume.
     */
    linearSlippageFactor?: string;
    /**
     * Liquidity monitoring parameters.
     */
    liquidityMonitoringParameters?: vegaLiquidityMonitoringParameters;
    liquiditySlaParameters?: vegaLiquiditySLAParameters;
    /**
     * Log normal risk model parameters, valid only if MODEL_LOG_NORMAL is selected.
     */
    logNormal?: vegaLogNormalRiskModel;
    /**
     * DEPRECATED: Use liquidity SLA parameters instead.
     * Percentage move up and down from the mid price which specifies the range of
     * price levels over which automated liquidity provision orders will be deployed.
     */
    lpPriceRange?: string;
    /**
     * Optional futures market metadata, tags.
     */
    metadata?: Array<string>;
    /**
     * Price monitoring parameters.
     */
    priceMonitoringParameters?: vegaPriceMonitoringParameters;
    /**
     * Quadratic slippage factor is used to cap the slippage component of maintenance margin - it is applied to the square of the slippage volume.
     */
    quadraticSlippageFactor?: string;
    /**
     * Simple risk model parameters, valid only if MODEL_SIMPLE is selected.
     */
    simple?: vegaSimpleModelParams;
};

