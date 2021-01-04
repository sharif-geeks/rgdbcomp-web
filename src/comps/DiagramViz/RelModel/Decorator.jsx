import styled from "styled-components";
import { accentColor } from "~/assets/colors";
import { Row } from "~/comps/shared";

export default function Decorator({ cols }) {
  const colInfos = cols.map((col) => ({
    name: col.column_name,
    type: col.data_type,
  }));

  const colInfosToShow = colInfos.length > 10 ? colInfos.slice(0, 9) : colInfos;

  return (
    <Container>
      <h2>{cols[0].table_name}</h2>
      <hr />
      {colInfosToShow.map((c, i) => (
        <Row justifySpaceBetween key={i}>
          <p>{c.name}</p>
          <p>{c.type}</p>
        </Row>
      ))}
      <p>
        {colInfos.length > 10 && "and " + (colInfos.length - 10) + " others..."}
      </p>
    </Container>
  );
}

const Container = styled.div`
  padding: 22px;
  font-size: 11px;
  width: 288px;
  height: 208px;
  box-sizing: border-box;
  transform: translateY(calc(100% + 7px));
  pointer-events: none;
  background-color: ${accentColor};
  border-radius: 8px;
  border: 2px solid white;

  p {
    margin: 0;
    pointer-events: none;
    user-select: none;
    touch-action: none;
  }

  h2 {
    margin: 0;
    pointer-events: none;
    user-select: none;
    touch-action: none;
  }
`;
