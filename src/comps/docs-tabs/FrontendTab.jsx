import styled from "styled-components";

export default function FrontendTab() {
  return (
    <Container>
      <iframe
        src="https://codesandbox.io/embed/github/rgdbcomp/rgdbcomp-web/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=editor&moduleview=1"
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
    </Container>
  );
}

const Container = styled.div`
  padding: 12px;
`;
