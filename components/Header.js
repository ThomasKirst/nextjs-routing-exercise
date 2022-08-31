import styled from 'styled-components';

import Link from 'next/link';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <AppHeader>
      <Nav>
        <Link href="/" passHref>
          <NavLink active={router.asPath === '/'}>Home</NavLink>
        </Link>
        <Link href="/product" passHref>
          <NavLink active={router.asPath === '/product'}>Product</NavLink>
        </Link>
        <Link href="/team" passHref>
          <NavLink active={router.asPath === '/team'}>Team</NavLink>
        </Link>
        <Link href="/account" passHref>
          <NavLink active={router.asPath === '/account'}>Account</NavLink>
        </Link>
      </Nav>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
