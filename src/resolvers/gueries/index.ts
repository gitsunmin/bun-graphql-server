import type { Resolvers } from '../../types/graphql';
import { hello } from './hello';
import { pets } from './pets';

export const Query: Resolvers['Query'] = {
    hello,
    pets
};