/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Operator describes the type of comparison.
 *
 * - OPERATOR_UNSPECIFIED: The default value
 * - OPERATOR_EQUALS: Verify if the property values are strictly equal or not.
 * - OPERATOR_GREATER_THAN: Verify if the data source data value is greater than the Condition value.
 * - OPERATOR_GREATER_THAN_OR_EQUAL: Verify if the data source data value is greater than or equal to the Condition
 * value.
 * - OPERATOR_LESS_THAN: Verify if the data source data value is less than the Condition value.
 * - OPERATOR_LESS_THAN_OR_EQUAL: Verify if the data source data value is less or equal to than the Condition
 * value.
 */
export enum ConditionOperator {
    OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED',
    OPERATOR_EQUALS = 'OPERATOR_EQUALS',
    OPERATOR_GREATER_THAN = 'OPERATOR_GREATER_THAN',
    OPERATOR_GREATER_THAN_OR_EQUAL = 'OPERATOR_GREATER_THAN_OR_EQUAL',
    OPERATOR_LESS_THAN = 'OPERATOR_LESS_THAN',
    OPERATOR_LESS_THAN_OR_EQUAL = 'OPERATOR_LESS_THAN_OR_EQUAL',
}
