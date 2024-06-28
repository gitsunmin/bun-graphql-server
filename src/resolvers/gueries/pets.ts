import { PetMocks } from '../../mocks/Pet';
import { type Query } from '../../types/graphql';

export const pets = (): Query['pets'] => PetMocks.makeRandomPetWithCount(5);