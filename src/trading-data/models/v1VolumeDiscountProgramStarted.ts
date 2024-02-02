/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeDiscountProgram } from './vegaVolumeDiscountProgram';

export type v1VolumeDiscountProgramStarted = {
    /**
     * Epoch at which the volume discount program started.
     */
    atEpoch?: string;
    /**
     * Volume discount program that has started.
     */
    program?: vegaVolumeDiscountProgram;
    /**
     * Time in Unix nanoseconds when the volume discount program started.
     */
    startedAt?: string;
};

