import type { Plugin } from '../../types';
import { handler } from '../query-core/plugin';
import { handlerLegacy } from '../query-core/plugin-legacy';
import type { Config } from './types';

export const defaultConfig: Plugin.Config<Config> = {
  _dependencies: ['@hey-api/sdk', '@hey-api/typescript'],
  _handler: handler,
  _handlerLegacy: handlerLegacy,
  exportFromIndex: false,
  infiniteQueryOptions: true,
  mutationOptions: true,
  name: '@tanstack/react-query',
  output: '@tanstack/react-query',
  paginationKeywords: ['after', 'before', 'cursor', 'offset', 'page', 'start'],
  queryOptions: true,
};

/**
 * Type helper for `@tanstack/react-query` plugin, returns {@link Plugin.Config} object
 */
export const defineConfig: Plugin.DefineConfig<Config> = (config) => ({
  ...defaultConfig,
  ...config,
});
