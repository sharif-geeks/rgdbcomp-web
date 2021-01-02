import styled from "styled-components";

export const CursorPointer = styled.div`
  display: contents;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifySpaceBetween ? "space-between" : "flex-start"};
  padding: ${(props) => props.padding || "initial"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "initial")};
  overflow: hidden;
  overflow-x: ${(props) => (props.scrollX ? "scroll" : "initial")};
  overflow-y: ${(props) => (props.scrollY ? "scroll" : "initial")};
`;

export const Space = styled.div`
  flex: 0 0 ${(props) => props.s || "44px"};
`;
