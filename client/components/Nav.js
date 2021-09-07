import Link from 'next/link';
import styled from 'styled-components'
import { useCart } from '../lib/cartState';
// import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

const LoginStyle = styled.a`
  background: var(--starLight);
  font-weight: 400;
  border: 2px solid var(--starLight);
  padding: 4px 16px;
  border-radius: 3px;
  /* text-transform: uppercase */
`

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      {/* <Link href="/products">Products</Link> */}
      {user && (
        <>
        <NavStyles>
          <Link href="/account">Account</Link>
          {/* <SignOut /> */}
        </NavStyles>
        <button type="button" onClick={openCart}>
          My Cart
        </button>
        </>
      )}
      {!user && (
        <>
          <NavStyles>
            <Link href="/courses">Онлайн хичээл</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/news">Мэдээлэл</Link>
            <Link href="/about">Бидний тухай</Link>
            <Link href="/contact">Холбоо барих</Link>
            {/* <SignOut /> */}
          </NavStyles>
          <Link href="/signin" >
            <LoginStyle>Нэвтрэх</LoginStyle>
          </Link>
        </>
      )}
    </>
  );
}