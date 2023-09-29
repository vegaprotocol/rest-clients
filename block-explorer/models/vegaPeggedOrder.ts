/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPeggedReference } from './vegaPeggedReference';

export type vegaPeggedOrder = {
    /**
     * Offset from the price reference.
     */
    offset?: string;
    /**
     * Price point the order is linked to.
     */
    reference?: vegaPeggedReference;
};

