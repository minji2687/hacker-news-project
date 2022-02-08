import styled from "@emotion/styled";

const RankerCardWrap = styled.div`
  width: 168px;
  height: 82px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  box-shadow: 0px 4px 4px #000000;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
const UserID = styled.strong``;

export default function RankerCard() {
  return (
    <RankerCardWrap>
      <UserID>dfsf</UserID>
    </RankerCardWrap>
  );
}
