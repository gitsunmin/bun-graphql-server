import type { Resolvers } from '../../types/graphql';
import { addPet } from './pet';

export const Mutation: Resolvers['Mutation'] = {
    addPet
};