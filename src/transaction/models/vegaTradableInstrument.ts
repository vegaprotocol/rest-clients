/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaInstrument } from './vegaInstrument';
import type { vegaLogNormalRiskModel } from './vegaLogNormalRiskModel';
import type { vegaMarginCalculator } from './vegaMarginCalculator';
import type { vegaSimpleRiskModel } from './vegaSimpleRiskModel';

export type vegaTradableInstrument = {
    /**
     * Details for the underlying instrument.
     */
    instrument?: vegaInstrument;
    /**
     * Log normal.
     */
    logNormalRiskModel?: vegaLogNormalRiskModel;
    /**
     * Margin calculator for the instrument.
     */
    marginCalculator?: vegaMarginCalculator;
    /**
     * Simple.
     */
    simpleRiskModel?: vegaSimpleRiskModel;
};

