import { Typography } from "@material-ui/core";
import styled from "styled-components";
import SUTICLogo from "~/assets/images/sutic-logo.png";
import IRFFLogo from "~/assets/images/ir-federation-logo.png";

export default function Header() {
  return (
    <Container>
      <Logo alt="sharif university of technology" src={SUTICLogo} />
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
      <Space />
      <Logo alt="iran football federation logo" src={IRFFLogo} />
    </Container>
  );
}

const Space = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  margin-right: 22px;
  height: 58px;
  width: 58px;
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
