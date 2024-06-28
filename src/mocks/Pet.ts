import { Color, type Cat, type Dog, type Pet } from '../types/graphql';

const DEFAULT_CAT: Cat = {
    __typename: 'Cat',
    color: Color.Black,
    id: '1',
    name: 'Fluffy',
};

const DEFAULT_DOG: Dog = {
    __typename: 'Dog',
    color: Color.Brown,
    id: '2',
    name: 'Rover',
};

const randomPet = (): Pet => Math.random() > 0.5 ? {
    ...DEFAULT_CAT,
    id: Math.random().toString(),
    name: Math.random().toString(),
    color: Math.random() > 0.5 ? Color.Black : Color.White,
} : {
    ...DEFAULT_DOG,
    id: Math.random().toString(),
    name: Math.random().toString(),
    color: Math.random() > 0.5 ? Color.Brown : Color.Yellow,

};

/**
 * 숫자만큼 랜덤한 펫을 생성합니다. 단, id, name, color, __typename을 모두 랜덤하게 생성합니다.
 */
const makeRandomPetWithCount = (count: number): Pet[] => Array.from({ length: count }, randomPet);


export const PetMocks = {
    makeRandomPetWithCount,
};