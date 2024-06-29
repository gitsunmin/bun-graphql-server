import { PetMocks } from '../../mocks/Pet'
import { Color, type MutationAddPetArgs, type MutationResolvers, type Pet } from '../../types/graphql';

export const addPet: MutationResolvers['addPet'] = async (_parent, args, _context) => {
    const { input } = args as MutationAddPetArgs;
    const { name } = input;

    const newPets = PetMocks.makeRandomPetWithCount(5);
    const addedPet: Pet = {
        __typename: 'Cat',
        id: `${Math.random()}`,
        name,
        color: Color.Black,
    };

    return [...newPets, addedPet];
}