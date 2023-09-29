/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaUpdateFutureProduct } from './vegaUpdateFutureProduct';
import type { vegaUpdatePerpetualProduct } from './vegaUpdatePerpetualProduct';

export type vegaUpdateInstrumentConfiguration = {
    /**
     * Instrument code, human-readable shortcode used to describe the instrument.
     */
    code?: string;
    /**
     * Future.
     */
    future?: vegaUpdateFutureProduct;
    /**
     * Perpetual.
     */
    perpetual?: vegaUpdatePerpetualProduct;
};

