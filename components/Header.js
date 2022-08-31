import styled from 'styled-components';

export default function Header() {
  return (
    <AppHeader>
      <Nav>
        <a>Home</a>
        <a>Product</a>
        <a>Team</a>
        <a>Account</a>
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
