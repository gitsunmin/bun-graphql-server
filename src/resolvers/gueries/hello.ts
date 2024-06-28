import type { Query } from '../../types/graphql';

export const hello = (): Query['hello'] => 'world!';