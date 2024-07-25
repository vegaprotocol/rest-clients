/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaFuture } from './vegaFuture';
import type { vegaInstrumentMetadata } from './vegaInstrumentMetadata';
import type { vegaPerpetual } from './vegaPerpetual';
import type { vegaSpot } from './vegaSpot';

export type vegaInstrument = {
    /**
     * Code for the instrument.
     */
    code?: string;
    /**
     * Future.
     */
    future?: vegaFuture;
    /**
     * Unique instrument ID.
     */
    id?: string;
    /**
     * Collection of instrument meta-data.
     */
    metadata?: vegaInstrumentMetadata;
    /**
     * Name of the instrument.
     */
    name?: string;
    /**
     * Perpetual.
     */
    perpetual?: vegaPerpetual;
    /**
     * Spot.
     */
    spot?: vegaSpot;
};

