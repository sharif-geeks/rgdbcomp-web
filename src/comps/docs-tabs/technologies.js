import HayyaunAvatar from "~/assets/images/hayyaun-avatar.jpg";
import ArmanAvatar from "~/assets/images/arman-avatar.jpg";
import NetlifyLogo from "~/assets/images/technologies/netlify.png";
import ReactLogo from "~/assets/images/technologies/react.png";
import NodeLogo from "~/assets/images/technologies/node.png";
import MUILogo from "~/assets/images/technologies/mui.png";
import VisJSLogo from "~/assets/images/technologies/visjs.png";
import VSCodeLogo from "~/assets/images/technologies/vscode.png";
import NestLogo from "~/assets/images/technologies/nest.png";
import PostgreLogo from "~/assets/images/technologies/postgre.png";
import WebstormLogo from "~/assets/images/technologies/webstorm.png";

const technologies = {
  frontend:
    [
      {
        image: ReactLogo,
        extra: "1500 lines",
        overline: "FACEBOOK INC.",
        heading: "React",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar, ArmanAvatar],
      },
      {
        image: NetlifyLogo,
        overline: "FACEBOOK INC.",
        heading: "Netlify",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar],
      },
      {
        image: NodeLogo,
        overline: "FACEBOOK INC.",
        heading: "NodeJS",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar, ArmanAvatar],
      },
      {
        image: MUILogo,
        overline: "GOOGLE INC.",
        heading: "Material UI",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar],
      },
      {
        image: VisJSLogo,
        overline: "FACEBOOK INC.",
        heading: "VisJS",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar, ArmanAvatar],
      },
      {
        image: VSCodeLogo,
        overline: "MICROSOFT INC.",
        heading: "VSCode",
        body:
          "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        faces: [HayyaunAvatar],
      },
    ],
  backend: [
    {
      image: NestLogo,
      extra: "1500 lines",
      overline: "FACEBOOK INC.",
      heading: "NestJS",
      body:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      faces: [HayyaunAvatar, ArmanAvatar],
    },
    {
      image: NodeLogo,
      extra: "1500 lines",
      overline: "FACEBOOK INC.",
      heading: "NodeJS",
      body:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      faces: [HayyaunAvatar, ArmanAvatar],
    },
    {
      image: PostgreLogo,
      overline: "FACEBOOK INC.",
      heading: "PostgreSQL",
      body:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      faces: [HayyaunAvatar],
    },
    {
      image: WebstormLogo,
      extra: "1500 lines",
      overline: "FACEBOOK INC.",
      heading: "Webstorm",
      body:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      faces: [HayyaunAvatar, ArmanAvatar],
    },
  ]
}

export default technologies