import { gql } from 'graphql-modules';

const aminoAcidTypeDef = gql`
  type AminoAcid {
    id: Int!
    tryptophan: Float
    threonine: Float
    isoleucine: Float
    leucine: Float
    lysine: Float
    methionine: Float
    cystine: Float
    phenylalanine: Float
    tyrosine: Float
    valine: Float
    arginine: Float
    histidine: Float
    alanine: Float
    asparticAcid: Float
    glutamicAcid: Float
    glycine: Float
    proline: Float
    serine: Float
  }
`;

export const typeDefs = [aminoAcidTypeDef];
