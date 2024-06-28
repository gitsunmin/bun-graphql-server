export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cat = Node & {
  __typename?: 'Cat';
  color: Color;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum Color {
  Black = 'Black',
  Brown = 'Brown',
  Teal = 'Teal',
  White = 'White',
  Yellow = 'Yellow'
}

export type Dog = Node & {
  __typename?: 'Dog';
  color: Color;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Pet = Cat | Dog;

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  pets: Array<Pet>;
};