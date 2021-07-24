import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import { ServerStyleSheet } from 'styled-components';

// we have to use class cmp only here
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) { //getInitialProps enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the data already populated from the server. This is especially useful for SEO.
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props}/>)
      );

      const styleTags = sheet.getStyleElement();
      return {...page, styleTags};

  }
  render() {
    return (
    <Html lang="en-US">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}