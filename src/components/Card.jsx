import styled from "@emotion/styled";

const CardWrap = styled.div`
  width: 100%;
  max-width: 384px;
  height: 140px;
  display: flex;
  border: 1px solid gray;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 27.08%;
  padding: 10px;
`;

const Ranking = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.3);
`;

const Writer = styled.strong`
  margin-top: 3px;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const CreatedDate = styled.span`
  color: #2a6b25;
  font-size: 13px;
  margin-top: 3px;
`;

const CardDoc = styled.div`
  margin-left: 17px;
  padding-top: 18px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 7.8px;
  line-height: 138.19%;
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
`;

const PointNum = styled.div`
  margin-right: 7px;
`;

const CommentNum = styled.div``;

export default function Card() {
  return (
    <CardWrap>
      <CardInfo>
        <Ranking>1</Ranking>
        <Writer>JamesKim</Writer>
        <CreatedDate>1 min ago</CreatedDate>
      </CardInfo>
      <CardDoc>
        <Title>
          Is there anywhere to buy a Raspberry Pi 3 or 4 at a “normal” price now
          buy a Pi ...
        </Title>
        <AdditionalInfo>
          <PointNum>97</PointNum>
          <CommentNum>100</CommentNum>
        </AdditionalInfo>
      </CardDoc>
    </CardWrap>
  );
}
