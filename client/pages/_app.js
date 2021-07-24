import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Do I have to wrap everything in that Page compoent?
// Is there any global some sort of global layout
// so anything created in global. It will wrap
function MyApp({ Component, pageProps, apollo}) {
  // console.log(apollo)
  return (
    <CartStateProvider>
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps}/>
      </Page>
    </ApolloProvider>
    </CartStateProvider>
  )
}

// tell Next.js to fetch all the children components
MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };

}
export default withData(MyApp);