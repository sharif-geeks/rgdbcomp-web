import styled from "styled-components";

export default function BackendTab() {
  return (
    <Container>
      <iframe
        src="https://codesandbox.io/embed/elated-goodall-3wcrm?fontsize=14&hidenavigation=1&theme=dark&view=editor"
        style={{
          width: "100%",
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: "hidden",
        }}
        title="elated-goodall-3wcrm"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px;
`;
