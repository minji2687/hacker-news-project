import styled from "@emotion/styled";
import avata from "../../assets/avata1.svg";

const RankerCardWrap = styled.div`
  width: 168px;
  height: 82px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  box-shadow: 0px 4px 4px #000000;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  position: relative;
  z-index: 1;

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: url(${avata}) no-repeat center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }
`;
const UserID = styled.strong``;

export default function RankerCard() {
  return (
    <RankerCardWrap>
      <UserID>dfsf</UserID>
    </RankerCardWrap>
  );
}
