/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - METHOD_NOW: Undelegate straight away, losing all rewards for the current epoch.
 * - METHOD_AT_END_OF_EPOCH: Undelegate at the end of an epoch, retaining all rewards for the current epoch.
 */
export enum v1UndelegateSubmissionMethod {
    METHOD_UNSPECIFIED = 'METHOD_UNSPECIFIED',
    METHOD_NOW = 'METHOD_NOW',
    METHOD_AT_END_OF_EPOCH = 'METHOD_AT_END_OF_EPOCH',
}
