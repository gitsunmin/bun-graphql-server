
import type { Resolvers } from '../types/graphql';
import { Query } from './gueries';
import { Mutation } from './mutations';

export const resolvers: Resolvers = {
    Query,
    Mutation,
}