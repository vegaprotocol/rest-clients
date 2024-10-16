/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeRebateProgram } from './vegaVolumeRebateProgram';

export type v1VolumeRebateProgramStarted = {
    /**
     * Epoch at which the volume discount program started.
     */
    atEpoch?: string;
    /**
     * Volume rebate program that has started.
     */
    program?: vegaVolumeRebateProgram;
    /**
     * Time in Unix nanoseconds when the volume discount program started.
     */
    startedAt?: string;
};

