/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLogNormalModelParams } from './vegaLogNormalModelParams';

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
     * Tau parameter of the risk model, projection horizon measured as a year fraction used in the expected shortfall
     * calculation to obtain the maintenance margin, must be a strictly non-negative real number.
     */
    tau?: number;
};

