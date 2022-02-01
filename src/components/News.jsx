import Card from "./Card";
import styled from "@emotion/styled";

const CardList = styled.div`
  display: flex;
  justify-content: center;
  background: #656565;
`;

export default function News() {
  return (
    <CardList>
      <Card />
    </CardList>
  );
}
