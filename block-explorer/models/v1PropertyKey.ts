/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PropertyKeyType } from './v1PropertyKeyType';

/**
 * PropertyKey describes the property key contained in data source data.
 */
export type v1PropertyKey = {
    /**
     * Name of the property.
     */
    name?: string;
    numberDecimalPlaces?: string;
    /**
     * Data type of the property.
     */
    type?: v1PropertyKeyType;
};

