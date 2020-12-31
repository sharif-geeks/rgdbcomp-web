import { Typography } from "@material-ui/core";
import styled from "styled-components";
import SUTICLogo from "~/assets/images/sutic-logo.png";

export default function Header() {
  return (
    <Container>
      <Logo
        alt="sharif university of technology"
        src={SUTICLogo}
        height={58}
        width={58}
      />
      <Col>
        <Typography variant="h5" gutterBottom>
          Relational Database vs Graph Database Comparison
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ fontFamily: "Righteous" }}
          gutterBottom
        >
          ARMAN SALEHI, AMIR HOSSEIN HAMI RAZAVI
        </Typography>
      </Col>
    </Container>
  );
}

const Logo = styled.img`
  margin-right: 22px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 32px 22px;
  display: flex;
  align-items: center;
`;
