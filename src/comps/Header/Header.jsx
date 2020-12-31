import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Relational Database vs Graph Database Comparison
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        ARMAN SALEHI, AMIR HOSSEIN HAMI RAZAVI
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 22px;
`;
