/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLogNormalModelParams } from './vegaLogNormalModelParams';
import type { vegaRiskFactorOverride } from './vegaRiskFactorOverride';

export type vegaLogNormalRiskModel = {
    /**
     * Risk model parameters for log normal.
     */
    params?: vegaLogNormalModelParams;
    /**
     * Risk Aversion Parameter.
     */
    riskAversionParameter?: number;
    /**
     * And optional override for the risk factor calculated by the risk model.
     */
    riskFactorOverride?: vegaRiskFactorOverride;
    /**
     * Tau parameter of the risk model, projection horizon measured as a year fraction used in the expected shortfall
     * calculation to obtain the maintenance margin, must be a strictly non-negative real number.
     */
    tau?: number;
};

