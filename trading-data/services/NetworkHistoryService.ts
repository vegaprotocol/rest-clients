/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apiHttpBody } from '../models/apiHttpBody';
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetNetworkHistoryBootstrapPeersResponse } from '../models/v2GetNetworkHistoryBootstrapPeersResponse';
import type { v2GetNetworkHistoryStatusResponse } from '../models/v2GetNetworkHistoryStatusResponse';
import type { v2ListAllNetworkHistorySegmentsResponse } from '../models/v2ListAllNetworkHistorySegmentsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkHistoryService {

    /**
     * Network history status
     * Get information about the current state of network history's IPFS swarm
     * @returns v2GetNetworkHistoryStatusResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetNetworkHistoryStatus(): CancelablePromise<v2GetNetworkHistoryStatusResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/networkhistory',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Network history bootstrap peers
     * Get a list of IPFS peers that can be used to initialise a new data node with network history
     * @returns v2GetNetworkHistoryBootstrapPeersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetNetworkHistoryBootstrapPeers(): CancelablePromise<v2GetNetworkHistoryBootstrapPeersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/networkhistory/bootstrap',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Export network history as CSV
     * Export CSV table data from network history between two block heights.
     *
     * The requested block heights must fall on network history segment boundaries, which can
     * be discovered by calling the API to list all network history segments. By default
     * segments contain 1000 blocks. In that case ranges such as (1, 1000), (1001, 2000), (1, 3000)
     * would all fall on segment boundaries and be valid.
     *
     * The generated CSV file is compressed into a ZIP file and returned, with the file name
     * in the following format: `[chain id]-[table name]-[start block]-[end block].zip`
     *
     * In gRPC, results are returned in a chunked stream of base64 encoded data.
     *
     * Through the REST gateway, the base64 data chunks are decoded and streamed as a
     * `content-type: application/zip` HTTP response.
     *
     * The CSV exported data uses a comma as a DELIMITER between fields, and " for QUOTE-ing fields.
     *
     * If a value contains any of: DELIMITER, QUOTE, carriage return, or line feed then the whole
     * value is prefixed and suffixed by the QUOTE character and any occurrence within
     * the value of a QUOTE character preceded by another QUOTE.
     *
     * A NULL is output as the NULL parameter string and is not quoted, while a non-NULL value
     * matching the NULL parameter string is quoted.
     *
     * For example, with the default settings, a NULL is written as an unquoted empty string,
     * while an empty string data value is written with double quotes.
     *
     * Note that CSV files produced may contain quoted values containing embedded carriage returns and line feeds.
     * Thus the files are not strictly one line per table row like text-format files.
     *
     * The first row of the CSV file is a header that describes the contents of each column
     * in subsequent rows.
     *
     * Usually the ZIP file will contain only a single CSV file. However it is possible that
     * the (from_block, to_block) request spans over a range of blocks in which the underlying
     * schema of the database changes. For example, a column may have been added, removed, or renamed.
     *
     * If this happens, the CSV file will be split at the point of the schema change and the zip
     * file will contain multiple CSV files, with a potentially different set of headers. The
     * 'version' number of the database schema is part of the in the CSV filename:
     *
     * `[chain id]-[table name]-[schema version]-[start block]-[end block].zip`
     *
     * For example, a zip file might be called mainnet-sometable-000001-003000.zip
     *
     * And contain two CSV files: `mainnet-sometable-1-000001-002000.csv`:
     *
     * timestamp, value
     * 1, foo
     * 2, bar
     *
     * And `mainnet-sometable-2-002001-003000.csv`:
     *
     * timestamp, value, extra_value
     * 3, baz, apple
     *
     * It is worth noting that the schema will not change within a single network history segment.
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * @param fromBlock Block to begin exporting from. Must be the first block of a history segment,
     * which by default are 1000 blocks each; in that case - 1, 1001, 2001 etc. are valid values.
     * This can be checked by first calling the API to list all network history segments.
     * @param toBlock Last block to export up to and including. Must be the last block of a history segment
     * which by default are 1000 blocks each; in that case - 1000, 2000, 3000 etc. are valid values.
     * This can be checked by first calling the API to list all network history segments.
     * @param table Table to export data from.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceExportNetworkHistory(
        fromBlock?: string,
        toBlock?: string,
        table: 'TABLE_UNSPECIFIED' | 'TABLE_BALANCES' | 'TABLE_CHECKPOINTS' | 'TABLE_DELEGATIONS' | 'TABLE_LEDGER' | 'TABLE_ORDERS' | 'TABLE_TRADES' | 'TABLE_MARKET_DATA' | 'TABLE_MARGIN_LEVELS' | 'TABLE_POSITIONS' | 'TABLE_LIQUIDITY_PROVISIONS' | 'TABLE_MARKETS' | 'TABLE_DEPOSITS' | 'TABLE_WITHDRAWALS' | 'TABLE_BLOCKS' | 'TABLE_REWARDS' = 'TABLE_UNSPECIFIED',
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: apiHttpBody;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/networkhistory/export',
            query: {
                'fromBlock': fromBlock,
                'toBlock': toBlock,
                'table': table,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List all network history segments
     * Get a list of all history segments stored by the data node currently connected to
     * @returns v2ListAllNetworkHistorySegmentsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAllNetworkHistorySegments(): CancelablePromise<v2ListAllNetworkHistorySegmentsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/networkhistory/segments',
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
