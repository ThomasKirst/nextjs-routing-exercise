import styled from 'styled-components';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

const PageWrapper = styled.section`
  padding: 1.5rem;
`;
