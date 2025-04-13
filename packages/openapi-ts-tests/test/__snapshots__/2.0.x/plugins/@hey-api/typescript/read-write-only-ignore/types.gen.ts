// This file is auto-generated by @hey-api/openapi-ts

export type FooRead = BarRead & {
    readonly foo?: string;
};

export type BarRead = Baz & {
    readonly bar?: string;
};

export type Baz = {
    baz?: string;
};

export type PostFooReadData = {
    body: FooRead;
    path?: never;
    query?: never;
    url: '/foo-read';
};

export type PostFooReadResponses = {
    /**
     * OK
     */
    200: FooRead;
};

export type PostFooReadResponse = PostFooReadResponses[keyof PostFooReadResponses];

export type ClientOptions = {
    baseUrl: string;
};