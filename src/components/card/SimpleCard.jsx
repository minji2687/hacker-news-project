import styled from "@emotion/styled";
import { CardWrap, CardInfo, CreatedDate, Ranking, Title } from "./Card";

export const SimpleCardWrap = styled(CardWrap)`
  width: ${({ shape }) => (shape === "list" ? "100%" : "43%")};
  height: ${({ shape }) => (shape === "list" ? "auto" : "177px")};
  padding: ${({ shape }) => (shape === "list" ? "9px" : "14px")};
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: ${({ shape }) =>
      shape === "list" ? "row-reverse" : "column"};
    justify-content: space-between;
  }
`;

export const SimpleCardInfo = styled(CardInfo)`
  width: ${({ shape }) => (shape === "list" ? "27%" : "100%")};
  padding: 0;
  font-size: 16px;
  display: flex;
  justify-content: ${({ isUrl }) => (isUrl ? "start" : "center")};
`;

export const SimpleCardTitle = styled(Title)`
  -webkit-line-clamp: ${({ shape }) => (shape === "list" ? 3 : 4)};
  width: ${({ shape }) => (shape === "list" ? "70%" : "100%")};
  height: 73px;
`;

export const SimpleCardCreatedDate = styled(CreatedDate)`
  font-size: 16px;
`;

const JobsURl = styled.div`
  padding: 4px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 1px solid #000000;
  margin: 10px auto;
  line-height: 135%;
`;

export default function SimpleCard({ data, shape, isUrl }) {
  // shape가 list이면 길다란 모양의 컴포넌트
  // shpage가 square이면 사각형 모양의 컴포넌트

  return (
    <SimpleCardWrap shape={shape}>
      {isUrl && (
        <JobsURl>
          <span>reverielabs.com</span>
        </JobsURl>
      )}

      <div>
        <SimpleCardTitle shape={shape}>{data.title}</SimpleCardTitle>
        <SimpleCardInfo shape={shape}>
          {shape === "list" ? <Ranking>001</Ranking> : null}
          <SimpleCardCreatedDate>1 min ago</SimpleCardCreatedDate>
        </SimpleCardInfo>
      </div>
    </SimpleCardWrap>
  );
}
