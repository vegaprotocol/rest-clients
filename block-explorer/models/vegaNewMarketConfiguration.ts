/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaInstrumentConfiguration } from './vegaInstrumentConfiguration';
import type { vegaLiquidityMonitoringParameters } from './vegaLiquidityMonitoringParameters';
import type { vegaLiquiditySLAParameters } from './vegaLiquiditySLAParameters';
import type { vegaLogNormalRiskModel } from './vegaLogNormalRiskModel';
import type { vegaPriceMonitoringParameters } from './vegaPriceMonitoringParameters';
import type { vegaSimpleModelParams } from './vegaSimpleModelParams';
import type { vegaSuccessorConfiguration } from './vegaSuccessorConfiguration';

export type vegaNewMarketConfiguration = {
    /**
     * Decimal places used for the new futures market, sets the smallest price increment on the book.
     */
    decimalPlaces?: string;
    /**
     * New futures market instrument configuration.
     */
    instrument?: vegaInstrumentConfiguration;
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
     * Optional new futures market metadata, tags.
     */
    metadata?: Array<string>;
    /**
     * Decimal places for order sizes, sets what size the smallest order / position on the futures market can be.
     */
    positionDecimalPlaces?: string;
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
    /**
     * Successor configuration. If this proposal is meant to succeed a given market, then this should be set.
     */
    successor?: vegaSuccessorConfiguration;
};

