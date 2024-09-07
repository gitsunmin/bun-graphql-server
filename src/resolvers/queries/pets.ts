import { PetMocks } from '../../mocks/Pet';
import { type QueryResolvers } from '../../types/graphql';

export const pets: QueryResolvers['pets'] = () => PetMocks.makeRandomPetWithCount(5);