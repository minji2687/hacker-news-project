import styled from "@emotion/styled";
import { CardWrap, CardInfo, CreatedDate, Ranking, Title } from "./Card";

export const SimpleCardWrap = styled(CardWrap)`
  width: ${({ shape }) => (shape === "list" ? "100%" : "43%")};
  height: ${({ shape }) => (shape === "list" ? "91px" : "177px")};
  padding: ${({ shape }) => (shape === "list" ? "9px" : "14px")};
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
  -webkit-line-clamp: ${({ shape }) => (shape === "list" ? 3 : 4)};
  width: ${({ shape }) => (shape === "list" ? "70%" : "100%")};
  height: 73px;
`;

export const SimpleCardCreatedDate = styled(CreatedDate)`
  font-size: 16px;
`;

export default function SimpleCard({ data, shape }) {
  // shape가 list이면 길다란 모양의 컴포넌트
  // shpage가 square이면 사각형 모양의 컴포넌트

  return (
    <SimpleCardWrap shape={shape}>
      <SimpleCardTitle shape={shape}>{data.title}</SimpleCardTitle>
      <SimpleCardInfo shape={shape}>
        {shape === "list" ? <Ranking>001</Ranking> : null}
        <SimpleCardCreatedDate>1 min ago</SimpleCardCreatedDate>
      </SimpleCardInfo>
    </SimpleCardWrap>
  );
}
