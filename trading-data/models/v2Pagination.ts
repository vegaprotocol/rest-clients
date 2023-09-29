/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * All data returned from the API is ordered in a well-defined manner.
 * The specific columns and the order in which the sorting is performed
 * depend on the API endpoint being called. However, the primary sorting
 * column is usually the timestamp of the block in which the data was last updated.
 *
 * To prevent excessively large response messages and to avoid overloading
 * database resources, the API employs a cursor-based pagination mechanism.
 *
 * This Pagination message can be optionally provided as part of the request to specify:
 * - The starting point within the total result set for beginning the page
 * - The size of the returned page
 * - The ordering of the data within that page
 *
 * If no Pagination message is provided, the API will return the first page of
 * data using the default page size. The default page size is 1000.
 *
 * To retrieve subsequent pages, the caller must examine the PageInfo structure
 * returned in the response to find a cursor string that uniquely identifies the
 * last row of that page. This cursor should then be passed in the 'after' field
 * of the Pagination message in a subsequent request.
 *
 * For paging backward, take the cursor for the first row of the page from PageInfo
 * and pass it in the 'before' field of the Pagination message.
 *
 * Pagination message that uses both first/after and last/before is considered invalid.
 */
export type v2Pagination = {
    /**
     * If paging forwards, the cursor string for the last row of the previous page.
     */
    after?: string;
    /**
     * If paging forwards, the cursor string for the first row of the previous page.
     */
    before?: string;
    /**
     * Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     */
    first?: number;
    /**
     * Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     */
    last?: number;
    /**
     * Whether to order the results with the newest records first. If not set, the default value is true.
     */
    newestFirst?: boolean;
};

