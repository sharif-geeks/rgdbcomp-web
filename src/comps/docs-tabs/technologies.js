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
        overline: "MAKERLOOP INC.",
        heading: "Netlify",
        body:
          "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
        faces: [HayyaunAvatar],
      },
      {
        image: NodeLogo,
        overline: "MICROSOFT CORP.",
        heading: "NodeJS",
        body:
          "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.",
        faces: [HayyaunAvatar, ArmanAvatar],
      },
      {
        image: MUILogo,
        overline: "COMMUNITY",
        heading: "Material UI",
        body:
          "React components for faster and easier web development. Build your own design system, or start with Material Design.",
        faces: [HayyaunAvatar],
      },
      {
        image: VisJSLogo,
        overline: "COMMUNITY",
        heading: "VisJS",
        body:
          `A dynamic, browser based visualization library.
          The library is designed to be easy to use, to handle large amounts of dynamic data, and to enable manipulation of and interaction with the data.
          The library consists of the components DataSet, Timeline, Network, Graph2d and Graph3d.`,
        faces: [HayyaunAvatar],
      },
      {
        image: VSCodeLogo,
        overline: "MICROSOFT INC.",
        heading: "VSCode",
        body:
          "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. ",
        faces: [HayyaunAvatar],
      },
    ],
  backend: [
    {
      image: NestLogo,
      extra: "1500 lines",
      overline: "COMMUNITY",
      heading: "NestJS",
      body:
        "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
      faces: [ArmanAvatar],
    },
    {
      image: NodeLogo,
      overline: "MICROSOFT CORP.",
      heading: "NodeJS",
      body:
        "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.",
      faces: [ArmanAvatar, HayyaunAvatar],
    },
    {
      image: PostgreLogo,
      overline: "COMMUNITY",
      heading: "PostgreSQL",
      body:
        "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.",
      faces: [ArmanAvatar],
    },
    {
      image: WebstormLogo,
      overline: "JETBRAINS CO.",
      heading: "Webstorm",
      body:
        "WebStorm is a cross-platform IDE primarily for web, JavaScript and TypeScript development. Many of JetBrains's other IDEs include the feature set of WebStorm via plugins.",
      faces: [ArmanAvatar],
    },
  ]
}

export default technologies