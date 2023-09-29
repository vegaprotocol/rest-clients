/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConditionOperator } from './ConditionOperator';

export type v1Condition = {
    /**
     * Type of comparison to make on the value.
     */
    operator?: ConditionOperator;
    /**
     * Value to be compared with by the operator.
     */
    value?: string;
};

