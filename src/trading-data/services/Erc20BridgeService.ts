/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetERC20ListAssetBundleResponse } from '../models/v2GetERC20ListAssetBundleResponse';
import type { v2GetERC20SetAssetLimitsBundleResponse } from '../models/v2GetERC20SetAssetLimitsBundleResponse';
import type { v2GetERC20WithdrawalApprovalResponse } from '../models/v2GetERC20WithdrawalApprovalResponse';
import type { v2ListERC20MultiSigSignerAddedBundlesResponse } from '../models/v2ListERC20MultiSigSignerAddedBundlesResponse';
import type { v2ListERC20MultiSigSignerRemovedBundlesResponse } from '../models/v2ListERC20MultiSigSignerRemovedBundlesResponse';
import type { v2ListNodeSignaturesResponse } from '../models/v2ListNodeSignaturesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Erc20BridgeService {

    /**
     * Get ERC20 set asset limits bundle
     * Get the signature bundle to update the token limits. These are `maxLifetimeDeposit` and `withdrawThreshold` for a given ERC20 token that is
     * already allowlisted in the collateral bridge.
     * @param proposalId Proposal ID of the asset update proposal.
     * @returns v2GetERC20SetAssetLimitsBundleResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetErc20SetAssetLimitsBundle(
        proposalId: string,
    ): CancelablePromise<v2GetERC20SetAssetLimitsBundleResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/erc20/asset/limits/bundle',
            query: {
                'proposalId': proposalId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get ERC20 list asset bundle
     * Get the signatures bundle to allowlist an ERC20 token in the collateral bridge
     * @param assetId Asset ID of the asset bundle requested.
     * @returns v2GetERC20ListAssetBundleResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetErc20ListAssetBundle(
        assetId: string,
    ): CancelablePromise<v2GetERC20ListAssetBundleResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/erc20/asset/list/bundle',
            query: {
                'assetId': assetId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get ERC20 withdrawal approval
     * Get the signature bundle to finalise a withdrawal on Ethereum
     * @param withdrawalId Withdrawal ID to retrieve.
     * @returns v2GetERC20WithdrawalApprovalResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetErc20WithdrawalApproval(
        withdrawalId: string,
    ): CancelablePromise<v2GetERC20WithdrawalApprovalResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/erc20/asset/withdrawal/bundle',
            query: {
                'withdrawalId': withdrawalId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List ERC20 multi-sig signer added bundles
     * Get a list of the signature bundles to add a particular validator to the signer list of the multisig contract
     * @param nodeId Node ID of the validator for which a signature bundle is required.
     * @param submitter Ethereum address of the validator that will submit the bundle.
     * @param epochSeq Epoch in which the bundle was generated, i.e. the epoch in which the node was promoted to consensus validator.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListERC20MultiSigSignerAddedBundlesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListErc20MultiSigSignerAddedBundles(
        nodeId?: string,
        submitter?: string,
        epochSeq?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListERC20MultiSigSignerAddedBundlesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/erc20/multisigcontrol/signer/added/bundles',
            query: {
                'nodeId': nodeId,
                'submitter': submitter,
                'epochSeq': epochSeq,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List ERC20 multi-sig signer removed bundles
     * Get a list of the signature bundles to remove a particular validator from signer list of the multisig contract
     * @param nodeId Node ID of the validator of which a signature bundle is required.
     * @param submitter Ethereum address of the validator that will submit the bundle.
     * @param epochSeq Epoch in which the bundle was generated, i.e. the epoch in which the node was demoted from a consensus validator.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListERC20MultiSigSignerRemovedBundlesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListErc20MultiSigSignerRemovedBundles(
        nodeId?: string,
        submitter?: string,
        epochSeq?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListERC20MultiSigSignerRemovedBundlesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/erc20/multisigcontrol/signer/removed/bundles',
            query: {
                'nodeId': nodeId,
                'submitter': submitter,
                'epochSeq': epochSeq,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List node signatures
     * Get a list of aggregate signatures from all the nodes of the network
     * @param id Resource ID to list signatures for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListNodeSignaturesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListNodeSignatures(
        id: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListNodeSignaturesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/node/signatures',
            query: {
                'id': id,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
