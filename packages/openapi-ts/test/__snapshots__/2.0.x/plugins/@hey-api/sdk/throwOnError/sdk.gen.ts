// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import type { ServiceWithEmptyTagData, DeleteCallWithoutParametersAndResponseData, GetCallWithoutParametersAndResponseData, HeadCallWithoutParametersAndResponseData, OptionsCallWithoutParametersAndResponseData, PatchCallWithoutParametersAndResponseData, PostCallWithoutParametersAndResponseData, PutCallWithoutParametersAndResponseData, CallWithDescriptionsData, CallWithParametersData, CallWithWeirdParameterNamesData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, DuplicateNameData, DuplicateName2Data, DuplicateName3Data, DuplicateName4Data, CallWithNoContentResponseData, CallWithResponseAndNoContentResponseData, CallWithResponseAndNoContentResponseResponse, DummyAData, DummyBData, CallWithResponseData, CallWithResponseResponse, CallWithDuplicateResponsesData, CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, CallWithResponsesData, CallWithResponsesResponse, CallWithResponsesError, CollectionFormatData, TypesData, TypesResponse, ComplexTypesData, ComplexTypesResponse, CallWithResultFromHeaderData, TestErrorCodeData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Response, PostApiVbyApiVersionBodyData, PostApiVbyApiVersionBodyResponse, PostApiVbyApiVersionBodyError } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export const serviceWithEmptyTag = <ThrowOnError extends boolean = true>(options?: Options<ServiceWithEmptyTagData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no-tag',
        ...options
    });
};

export const deleteCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<DeleteCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const getCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<GetCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const headCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<HeadCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).head<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const optionsCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<OptionsCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).options<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const patchCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<PatchCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).patch<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const postCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<PostCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const putCallWithoutParametersAndResponse = <ThrowOnError extends boolean = true>(options?: Options<PutCallWithoutParametersAndResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const callWithDescriptions = <ThrowOnError extends boolean = true>(options?: Options<CallWithDescriptionsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/descriptions/',
        ...options
    });
};

export const callWithParameters = <ThrowOnError extends boolean = true>(options: Options<CallWithParametersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters/{parameterPath}',
        ...options
    });
};

export const callWithWeirdParameterNames = <ThrowOnError extends boolean = true>(options: Options<CallWithWeirdParameterNamesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters/{parameter.path.1}/{parameter-path-2}/{PARAMETER-PATH-3}',
        ...options
    });
};

export const callWithDefaultParameters = <ThrowOnError extends boolean = true>(options: Options<CallWithDefaultParametersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const callWithDefaultOptionalParameters = <ThrowOnError extends boolean = true>(options?: Options<CallWithDefaultOptionalParametersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const callToTestOrderOfParams = <ThrowOnError extends boolean = true>(options: Options<CallToTestOrderOfParamsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const duplicateName = <ThrowOnError extends boolean = true>(options?: Options<DuplicateNameData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName2 = <ThrowOnError extends boolean = true>(options?: Options<DuplicateName2Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName3 = <ThrowOnError extends boolean = true>(options?: Options<DuplicateName3Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName4 = <ThrowOnError extends boolean = true>(options?: Options<DuplicateName4Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const callWithNoContentResponse = <ThrowOnError extends boolean = true>(options?: Options<CallWithNoContentResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no-content',
        ...options
    });
};

export const callWithResponseAndNoContentResponse = <ThrowOnError extends boolean = true>(options?: Options<CallWithResponseAndNoContentResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<CallWithResponseAndNoContentResponseResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/multiple-tags/response-and-no-content',
        ...options
    });
};

export const dummyA = <ThrowOnError extends boolean = true>(options?: Options<DummyAData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/multiple-tags/a',
        ...options
    });
};

export const dummyB = <ThrowOnError extends boolean = true>(options?: Options<DummyBData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/multiple-tags/b',
        ...options
    });
};

export const callWithResponse = <ThrowOnError extends boolean = true>(options?: Options<CallWithResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<CallWithResponseResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const callWithDuplicateResponses = <ThrowOnError extends boolean = true>(options?: Options<CallWithDuplicateResponsesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, ThrowOnError>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const callWithResponses = <ThrowOnError extends boolean = true>(options?: Options<CallWithResponsesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<CallWithResponsesResponse, CallWithResponsesError, ThrowOnError>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const collectionFormat = <ThrowOnError extends boolean = true>(options: Options<CollectionFormatData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        querySerializer: {
            array: {
                explode: false,
                style: 'form'
            }
        },
        url: '/api/v{api-version}/collectionFormat',
        ...options
    });
};

export const types = <ThrowOnError extends boolean = true>(options: Options<TypesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<TypesResponse, unknown, ThrowOnError>({
        querySerializer: {
            array: {
                explode: false,
                style: 'form'
            }
        },
        url: '/api/v{api-version}/types',
        ...options
    });
};

export const complexTypes = <ThrowOnError extends boolean = true>(options: Options<ComplexTypesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<ComplexTypesResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/complex',
        ...options
    });
};

export const callWithResultFromHeader = <ThrowOnError extends boolean = true>(options?: Options<CallWithResultFromHeaderData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/header',
        ...options
    });
};

export const testErrorCode = <ThrowOnError extends boolean = true>(options: Options<TestErrorCodeData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/error',
        ...options
    });
};

export const nonAsciiæøåÆøÅöôêÊ字符串 = <ThrowOnError extends boolean = true>(options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<NonAsciiæøåÆøÅöôêÊ字符串Response, unknown, ThrowOnError>({
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串',
        ...options
    });
};

/**
 * Body should not be unknown
 * Body should not be unknown
 */
export const postApiVbyApiVersionBody = <ThrowOnError extends boolean = true>(options: Options<PostApiVbyApiVersionBodyData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostApiVbyApiVersionBodyResponse, PostApiVbyApiVersionBodyError, ThrowOnError>({
        url: '/api/v{api-version}/body',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};