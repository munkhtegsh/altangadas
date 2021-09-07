import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  // 1. Query the current user see if they are signed in
  const sesh = context.session as Session;
  console.log('SESH: ', sesh)
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!')
  }

  // 2. Query current user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: {
        id: sesh.itemId, // itemId is userId from Session
      },
      product: {
        id: productId
      }
    },
    resolveFields: 'id, quantity'
  })

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(`There are already ${existingCartItem.quantity}, incremented by 1!`)

    // 3. See if the current item is in their cart
    // 4. If it is then increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: {
        quantity: existingCartItem.quantity + 1
      }
    })
  }



  return await context.lists.CartItem.createOne({
    data: {
      product: {
        connect: {
          id: productId
        }
      },
      user: {
        connect: {
          id: sesh.itemId
        }
      }
    }
  })
}

export default addToCart;