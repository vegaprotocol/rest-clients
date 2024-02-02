/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaInstrumentConfiguration } from './vegaInstrumentConfiguration';
import type { vegaLiquidityFeeSettings } from './vegaLiquidityFeeSettings';
import type { vegaLiquiditySLAParameters } from './vegaLiquiditySLAParameters';
import type { vegaLogNormalRiskModel } from './vegaLogNormalRiskModel';
import type { vegaPriceMonitoringParameters } from './vegaPriceMonitoringParameters';
import type { vegaSimpleModelParams } from './vegaSimpleModelParams';
import type { vegaTargetStakeParameters } from './vegaTargetStakeParameters';

export type vegaNewSpotMarketConfiguration = {
    /**
     * Decimal places used for the new spot market, sets the smallest price increment on the book.
     */
    decimalPlaces?: string;
    /**
     * New spot market instrument configuration.
     */
    instrument?: vegaInstrumentConfiguration;
    /**
     * Specifies how the liquidity fee for the market will be calculated.
     */
    liquidityFeeSettings?: vegaLiquidityFeeSettings;
    /**
     * Log normal risk model parameters, valid only if MODEL_LOG_NORMAL is selected.
     */
    logNormal?: vegaLogNormalRiskModel;
    /**
     * Optional new spot market metadata, tags.
     */
    metadata?: Array<string>;
    /**
     * Decimal places for order sizes, sets what size the smallest order / position on the spot market can be.
     */
    positionDecimalPlaces?: string;
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

