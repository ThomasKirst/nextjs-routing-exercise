import styled from 'styled-components';

const NavLink = styled.a`
  font-size: 1rem;
  padding: 0;
  color: ${({ active }) => (active ? 'lime' : 'white')};
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export default NavLink;
