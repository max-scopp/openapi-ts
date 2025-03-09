// This file is auto-generated by @hey-api/openapi-ts

import { type Options as ClientOptions, type TDataShape, type Client, formDataBodySerializer, urlSearchParamsBodySerializer } from '@hey-api/client-fetch';
import type { ExportData, PatchApiVbyApiVersionNoTagData, ImportData, ImportResponse, FooWowData, ApiVVersionODataControllerCountData, ApiVVersionODataControllerCountResponse, GetApiVbyApiVersionSimpleOperationData, GetApiVbyApiVersionSimpleOperationResponse, GetApiVbyApiVersionSimpleOperationError, DeleteCallWithoutParametersAndResponseData, GetCallWithoutParametersAndResponseData, HeadCallWithoutParametersAndResponseData, OptionsCallWithoutParametersAndResponseData, PatchCallWithoutParametersAndResponseData, PostCallWithoutParametersAndResponseData, PutCallWithoutParametersAndResponseData, DeleteFooData3, CallWithDescriptionsData, DeprecatedCallData, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamData, PostCallWithOptionalParamResponse, PostApiVbyApiVersionRequestBodyData, PostApiVbyApiVersionFormDataData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, DuplicateNameData, DuplicateName2Data, DuplicateName3Data, DuplicateName4Data, CallWithNoContentResponseData, CallWithNoContentResponseResponse, CallWithResponseAndNoContentResponseData, CallWithResponseAndNoContentResponseResponse, DummyAData, DummyAResponse, DummyBData, DummyBResponse, CallWithResponseData, CallWithResponseResponse, CallWithDuplicateResponsesData, CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, CallWithResponsesData, CallWithResponsesResponse, CallWithResponsesError, CollectionFormatData, TypesData, TypesResponse, UploadFileData, UploadFileResponse, FileResponseData, FileResponseResponse, ComplexTypesData, ComplexTypesResponse, MultipartResponseData, MultipartResponseResponse, MultipartRequestData, ComplexParamsData, ComplexParamsResponse, CallWithResultFromHeaderData, TestErrorCodeData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Response, PutWithFormUrlEncodedData } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

export const export_ = <ThrowOnError extends boolean = true>(options?: Options<ExportData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const patchApiVbyApiVersionNoTag = <ThrowOnError extends boolean = true>(options?: Options<PatchApiVbyApiVersionNoTagData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).patch<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const import_ = <ThrowOnError extends boolean = true>(options: Options<ImportData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<ImportResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no+tag',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const fooWow = <ThrowOnError extends boolean = true>(options?: Options<FooWowData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const apiVVersionODataControllerCount = <ThrowOnError extends boolean = true>(options?: Options<ApiVVersionODataControllerCountData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<ApiVVersionODataControllerCountResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/simple/$count',
        ...options
    });
};

export const getApiVbyApiVersionSimpleOperation = <ThrowOnError extends boolean = true>(options: Options<GetApiVbyApiVersionSimpleOperationData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiVbyApiVersionSimpleOperationResponse, GetApiVbyApiVersionSimpleOperationError, ThrowOnError>({
        url: '/api/v{api-version}/simple:operation',
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

export const deleteFoo = <ThrowOnError extends boolean = true>(options: Options<DeleteFooData3, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/foo/{foo_param}/bar/{BarParam}',
        ...options
    });
};

export const callWithDescriptions = <ThrowOnError extends boolean = true>(options?: Options<CallWithDescriptionsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/descriptions',
        ...options
    });
};

/**
 * @deprecated
 */
export const deprecatedCall = <ThrowOnError extends boolean = true>(options: Options<DeprecatedCallData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters/deprecated',
        ...options
    });
};

export const callWithParameters = <ThrowOnError extends boolean = true>(options: Options<CallWithParametersData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters/{parameterPath}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const callWithWeirdParameterNames = <ThrowOnError extends boolean = true>(options: Options<CallWithWeirdParameterNamesData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters/{parameter.path.1}/{parameter-path-2}/{PARAMETER-PATH-3}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCallWithOptionalParam = <ThrowOnError extends boolean = true>(options: Options<GetCallWithOptionalParamData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postCallWithOptionalParam = <ThrowOnError extends boolean = true>(options: Options<PostCallWithOptionalParamData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostCallWithOptionalParamResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/parameters',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postApiVbyApiVersionRequestBody = <ThrowOnError extends boolean = true>(options?: Options<PostApiVbyApiVersionRequestBodyData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/requestBody',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postApiVbyApiVersionFormData = <ThrowOnError extends boolean = true>(options?: Options<PostApiVbyApiVersionFormDataData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        ...formDataBodySerializer,
        url: '/api/v{api-version}/formData',
        ...options,
        headers: {
            'Content-Type': null,
            ...options?.headers
        }
    });
};

export const callWithDefaultParameters = <ThrowOnError extends boolean = true>(options?: Options<CallWithDefaultParametersData, ThrowOnError>) => {
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
    return (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
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
    return (options?.client ?? _heyApiClient).get<CallWithNoContentResponseResponse, unknown, ThrowOnError>({
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
    return (options?.client ?? _heyApiClient).get<DummyAResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/multiple-tags/a',
        ...options
    });
};

export const dummyB = <ThrowOnError extends boolean = true>(options?: Options<DummyBData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<DummyBResponse, unknown, ThrowOnError>({
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
    return (options.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/collectionFormat',
        ...options
    });
};

export const types = <ThrowOnError extends boolean = true>(options: Options<TypesData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<TypesResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/types',
        ...options
    });
};

export const uploadFile = <ThrowOnError extends boolean = true>(options: Options<UploadFileData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<UploadFileResponse, unknown, ThrowOnError>({
        ...urlSearchParamsBodySerializer,
        url: '/api/v{api-version}/upload',
        ...options,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        }
    });
};

export const fileResponse = <ThrowOnError extends boolean = true>(options: Options<FileResponseData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<FileResponseResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/file/{id}',
        ...options
    });
};

export const complexTypes = <ThrowOnError extends boolean = true>(options: Options<ComplexTypesData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ComplexTypesResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/complex',
        ...options
    });
};

export const multipartResponse = <ThrowOnError extends boolean = true>(options?: Options<MultipartResponseData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<MultipartResponseResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/multipart',
        ...options
    });
};

export const multipartRequest = <ThrowOnError extends boolean = true>(options?: Options<MultipartRequestData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        ...formDataBodySerializer,
        url: '/api/v{api-version}/multipart',
        ...options,
        headers: {
            'Content-Type': null,
            ...options?.headers
        }
    });
};

export const complexParams = <ThrowOnError extends boolean = true>(options: Options<ComplexParamsData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<ComplexParamsResponse, unknown, ThrowOnError>({
        url: '/api/v{api-version}/complex/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json-patch+json',
            ...options?.headers
        }
    });
};

export const callWithResultFromHeader = <ThrowOnError extends boolean = true>(options?: Options<CallWithResultFromHeaderData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/header',
        ...options
    });
};

export const testErrorCode = <ThrowOnError extends boolean = true>(options: Options<TestErrorCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v{api-version}/error',
        ...options
    });
};

export const nonAsciiæøåÆøÅöôêÊ字符串 = <ThrowOnError extends boolean = true>(options: Options<NonAsciiæøåÆøÅöôêÊ字符串Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<NonAsciiæøåÆøÅöôêÊ字符串Response, unknown, ThrowOnError>({
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串',
        ...options
    });
};

/**
 * Login User
 */
export const putWithFormUrlEncoded = <ThrowOnError extends boolean = true>(options: Options<PutWithFormUrlEncodedData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        ...urlSearchParamsBodySerializer,
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串',
        ...options,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        }
    });
};