/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Condition } from './v1Condition';
import type { v1PropertyKey } from './v1PropertyKey';

/**
 * Filter describes the conditions under which a data source data is considered of
 * interest or not.
 */
export type v1Filter = {
    /**
     * Conditions that should be matched by the data to be
     * considered of interest.
     */
    conditions?: Array<v1Condition>;
    /**
     * Data source's data property key targeted by the filter.
     */
    key?: v1PropertyKey;
};

