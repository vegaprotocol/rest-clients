/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaFutureProduct } from './vegaFutureProduct';
import type { vegaPerpetualProduct } from './vegaPerpetualProduct';
import type { vegaSpotProduct } from './vegaSpotProduct';

export type vegaInstrumentConfiguration = {
    /**
     * Instrument code, human-readable shortcode used to describe the instrument.
     */
    code?: string;
    /**
     * Future.
     */
    future?: vegaFutureProduct;
    /**
     * Instrument name.
     */
    name?: string;
    /**
     * Perpetual.
     */
    perpetual?: vegaPerpetualProduct;
    /**
     * Spot.
     */
    spot?: vegaSpotProduct;
};

