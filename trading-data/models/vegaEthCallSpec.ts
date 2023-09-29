/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Filter } from './v1Filter';
import type { vegaEthCallTrigger } from './vegaEthCallTrigger';
import type { vegaNormaliser } from './vegaNormaliser';

/**
 * Specifies a data source that derives its content from calling a read method
 * on an Ethereum contract.
 */
export type vegaEthCallSpec = {
    /**
     * The ABI of that contract.
     */
    abi?: string;
    /**
     * Ethereum address of the contract to call.
     */
    address?: string;
    /**
     * List of arguments to pass to method call.
     * Protobuf 'Value' wraps an arbitrary JSON type that is mapped to an Ethereum
     * type according to the ABI.
     */
    args?: Array<Record<string, any>>;
    filters?: Array<v1Filter>;
    /**
     * Name of the method on the contract to call.
     */
    method?: string;
    /**
     * Normalisers are used to convert the data returned from the contract method
     * into a standard format. The key of the map is the name of the property,
     * which identifies the specific piece of data to other parts of the data
     * sourcing framework, for example filters. The value is a JSONPath expression
     * for expressing where in the contract call result the required data is
     * located, for example $[0] indicates the first result. $[1].price would look
     * in the second result returned from the contract for a structure with a key
     * called 'price' and use that if it exists.
     */
    normalisers?: Array<vegaNormaliser>;
    requiredConfirmations?: string;
    /**
     * Conditions for determining when to call the contract method.
     */
    trigger?: vegaEthCallTrigger;
};

