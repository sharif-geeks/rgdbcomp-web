import styled from "styled-components";
import Header from "~/comps/Header";

export default function PageLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;
