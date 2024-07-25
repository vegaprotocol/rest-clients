/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaScalingFactors } from './vegaScalingFactors';

export type vegaMarginCalculator = {
    /**
     * If set to true, positions must be fully collateralised so there is no default risk for any party (capped futures).
     */
    fullyCollateralised?: boolean;
    /**
     * Scaling factors for margin calculation.
     */
    scalingFactors?: vegaScalingFactors;
};

