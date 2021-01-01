import styled from "styled-components";

export default function FrontendTab() {
  return (
    <Container>
      <iframe
        src="https://codesandbox.io/embed/frosty-flower-e0063?fontsize=14&hidenavigation=1&theme=dark&view=editor&moduleview=1"
        style={{
          width: "100%",
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: "hidden",
        }}
        title="frosty-flower-e0063"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <a href="https://codesandbox.io/s/frosty-flower-e0063?fontsize=14&theme=dark">
        <img
          alt="Edit e0063"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px;
`;
