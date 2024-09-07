import type { Query, QueryResolvers } from '../../types/graphql';

export const hello: QueryResolvers['hello'] = () => 'world!';