import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { CartItem } from './schemas/CardItem';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations/index';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User', // need to know who is logging
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add initial roles here
  },
  passwordResetLink: {  // to show up sendUserPasswordResetLink in API
    async sendToken(args) {
      console.log(args) // returns TOKEN

      //send the email
      await sendPasswordResetEmail(args.token, args.identity);
    }
  }
});

export default withAuth(config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
    async onConnect(keystone) {
      console.log('COnnect to the database')
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    }
  },
  lists: createSchema({
    // Schema items go in here
    User,
    Product,
    ProductImage,
    CartItem,
    OrderItem,
    Order
  }),
  extendGraphqlSchema,
  ui: {
    // TODO: change this for roles
    // show ui for only people who pass this test
    isAccessAllowed: ({ session }) => {
      console.log(session);
      return !!session ?.data;
    },
  },
  // TODO: Add session values here (cookies)
  session: withItemData(statelessSessions(sessionConfig), {
    // You can do middleware for user is signed in?  Session here
    // GraphQL query
    User: 'id name email'
  })
}))
  ;