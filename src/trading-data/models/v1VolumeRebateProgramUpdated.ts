/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeRebateProgram } from './vegaVolumeRebateProgram';

export type v1VolumeRebateProgramUpdated = {
    /**
     * Epoch at which the volume discount program was updated.
     */
    atEpoch?: string;
    /**
     * The updated volume rebate program.
     */
    program?: vegaVolumeRebateProgram;
    /**
     * Time in Unix nanoseconds when the volume discount program was updated.
     */
    updatedAt?: string;
};

