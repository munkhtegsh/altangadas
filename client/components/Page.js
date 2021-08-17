import PropTypes from 'prop-types';
import Header from "./Header";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    /* font-family: 'radnika_next'; */
    font-family: 'GalaxiePolaris-Book', sans-serif;
    /* src: url('/static/radnikanext-medium-webfont.woff2') */
    src: url('/static/Galaxie-Polaris-Book.otf')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --starLight: #f9cf36;
    --red: #ff0000;
    --blue: #279bf7;
    --highBlue: #19b6fa;
    --lightBlue: #6EC1E4;
    --skyBlue: #d1edee;
    --hoverBlue: #004485;
    --gray: #7A7A7A;
    --lightGray: #e1e1e1;
    --heavyGray: #54595F;
    --green: #23A455;
    --lightGreen: #61CE70;
    --purple: #4054B2;
    --offWhite: #ededed;
    --black: #000;
    --lightBlack: #292933;
    --white: #FFF;
    --main-text-color: #555555;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    /* font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: 'sans-serif', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height:2;
    background:  #f4f4f4;
    background:  #fff;
    background-color: #eeeeee;
    font-family: 'helvetica', sans-serif;
    font-size: 16px;
	/* transform: translate3d(0,0,0); */
	/* background: linear-gradient(135deg, #4378b9 0%,#9b59b6 100%); */
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    /* font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', */
    font-family: 'sans-serif', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
`

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 8rem 2rem 2rem 2rem;
  margin-top: 20px;
`

export default function Page({children}) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {children}
      </InnerStyles>
    </div>

  )
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};