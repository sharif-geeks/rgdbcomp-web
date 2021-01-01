import { Avatar, makeStyles, Typography } from "@material-ui/core";
import styled from "styled-components";
import SUTICLogo from "~/assets/images/sutic-logo.png";
import IRFFLogo from "~/assets/images/ir-federation-logo.png";
import HayyaunAvatar from "~/assets/images/hayyaun-avatar.jpg";
import ArmanAvatar from "~/assets/images/arman-avatar.jpg";
import { blue, green } from "@material-ui/core/colors";
import { DescriptionRounded, HomeRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Header() {
  const classes = useStyles();

  return (
    <Container>
      <Logo alt="iran football federation logo" src={IRFFLogo} />
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
          DR. KEYHANIPOOR, ARMAN SALEHI, AMIR HOSSEIN HAMI RAZAVI
        </Typography>
      </Col>
      <Space />
      <a
        href="https://github.com/armansal1519"
        target="_blank"
        rel="noreferrer"
      >
        <Avatar
          alt="Arman Salehi"
          src={ArmanAvatar}
          className={classes.large}
        />
      </a>
      <a href="https://github.com/hayyaun" target="_blank" rel="noreferrer">
        <Avatar
          alt="Hayyan Hami"
          src={HayyaunAvatar}
          className={classes.large}
        />
      </a>
      <Link to="/docs">
        <Avatar className={classes.greenAvatar}>
          <DescriptionRounded />
        </Avatar>
      </Link>
      <Link to="/">
        <Avatar className={classes.blueAvatar}>
          <HomeRounded />
        </Avatar>
      </Link>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0.5),
  },
  greenAvatar: {
    color: "#fff",
    backgroundColor: green[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0.5),
  },
  blueAvatar: {
    color: "#fff",
    backgroundColor: blue[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0.5),
  },
}));

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
