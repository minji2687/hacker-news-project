import styled from "@emotion/styled";
import { CardWrap, CardInfo, CreatedDate, Ranking, Title } from "./Card";

export const SimpleCardWrap = styled(CardWrap)`
  width: ${({ shape }) => (shape === "list" ? "92%" : "43%")};
  height: ${({ shape }) => (shape === "list" ? "91px" : "177px")};
  padding: ${({ shape }) => (shape === "list" ? "10px" : "14px")};
  display: flex;
  flex-direction: ${({ shape }) =>
    shape === "list" ? "row-reverse" : "column"};
  justify-content: space-between;
`;

export const SimpleCardInfo = styled(CardInfo)`
  width: ${({ shape }) => (shape === "list" ? "27%" : "100%")};
  padding: 0;
  font-size: 16px;
`;

export const SimpleCardTitle = styled(Title)`
  -webkit-line-clamp: ${({ shape }) => (shape === "list" ? 2 : 4)};
  width: ${({ shape }) => (shape === "list" ? "70%" : "100%")};
`;

export const SimpleCardCreatedDate = styled(CreatedDate)`
  font-size: 16px;
`;

export default function SimpleCard(props) {
  // shape가 list이면 길다란 모양의 컴포넌트
  // shpage가 square이면 사각형 모양의 컴포넌트

  return (
    <SimpleCardWrap {...props}>
      <SimpleCardTitle {...props}>
        Manara (YC W21) hiriIs there anywhere to buy a Raspberry Pi 3 or 4 at a
        “normal” price now buy a Ping full-stack engineers and designer(remote)
      </SimpleCardTitle>
      <SimpleCardInfo {...props}>
        {props.shape === "list" ? <Ranking>001</Ranking> : null}
        <SimpleCardCreatedDate>1 min ago</SimpleCardCreatedDate>
      </SimpleCardInfo>
    </SimpleCardWrap>
  );
}
