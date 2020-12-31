import styled from "styled-components";

export default function Details() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  background-color: #fff5;
  height: 100%;
  border-radius: 0 22px 22px 0;
`;

const Container = styled.div`
  flex: 0 0 320px;
  padding: 12px 22px 12px 4px;
`;
