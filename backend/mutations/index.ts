import { graphQLSchemaExtension } from "@keystone-next/keystone/schema/dist/keystone.cjs";
import addToCart from './addToCart';
import checkout from './checkout';
// make a fake tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      checkout(token: String!): Order
    }
  `,

  resolvers: {
    Mutation: {
      addToCart,
      checkout
    }
  }

})