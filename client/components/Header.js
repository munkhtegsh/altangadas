import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';
import Image from 'next/image';

const Logo = styled.h1`
  position: relative;
  z-index: 2;
  margin: 0;
  text-decoration: none;

  /* transform: skew(-7deg); */
  a {

    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    @media (max-width: 600px) {
      visibility: hidden;

    }

  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  line-height: 1.7rem;
  .bar {

    display: flex;
    /* display: grid;
    grid-template-columns: auto 1fr; */
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 4%);
    background: #fff;
    height: 80px;
    padding: 0 4rem;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Image src="/static/images/logo.svg" alt="Star logo" width="25px" height="25px"></Image>
          <Link href="/">Алтан Гадас</Link>
        </Logo>
        <Nav />
      </div>
      {/* <div className="sub-bar">
        <Search/>
      </div> */}
    </HeaderStyles>
  );
}