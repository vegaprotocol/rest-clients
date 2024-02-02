/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeDiscountProgram } from './vegaVolumeDiscountProgram';

export type v1VolumeDiscountProgramUpdated = {
    /**
     * Epoch at which the volume discount program was updated.
     */
    atEpoch?: string;
    /**
     * The updated volume discount program.
     */
    program?: vegaVolumeDiscountProgram;
    /**
     * Time in Unix nanoseconds when the volume discount program was updated.
     */
    updatedAt?: string;
};

