/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1InputData } from './v1InputData';
import type { v1Signature } from './v1Signature';

export type blockexplorerapiv1Transaction = {
    block?: string;
    code?: number;
    command?: v1InputData;
    cursor?: string;
    error?: string;
    hash?: string;
    index?: number;
    signature?: v1Signature;
    submitter?: string;
    type?: string;
};

