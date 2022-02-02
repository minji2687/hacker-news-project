import styled from "@emotion/styled";
import pointIcon from "../../assets/point.svg";
import commentIcon from "../../assets/comment.svg";

export const CardWrap = styled.div`
  width: 92%;
  height: 140px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px #000000;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 27.08%;
  padding: 10px;
`;

export const Ranking = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.3);
`;

export const Writer = styled.strong`
  margin-top: 3px;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

export const CreatedDate = styled.span`
  color: #2a6b25;
  font-size: 13px;
  margin-top: 3px;
`;

export const CardDoc = styled.div`
  margin-left: 17px;
  padding-top: 18px;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 7.8px;
  line-height: 138.19%;
  // 말줄임
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
  height: 30px;
  color: rgba(0, 0, 0, 0.6);
`;

export const PointNum = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7px;
  padding-left: 35px;
  background: url(${pointIcon}) no-repeat left;
  min-height: 24px;
  span {
    padding-top: 3px;
  }
`;

export const CommentNum = styled.div`
  display: flex;
  align-items: center;
  background: url(${commentIcon}) no-repeat left;
  min-height: 24px;
  padding-left: 31px;
  span {
    padding-top: 3px;
  }
`;

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
          buy a Pi
        </Title>
        <AdditionalInfo>
          <PointNum>
            <span>9d444d7</span>
          </PointNum>
          <CommentNum>
            <span>10dfdf0</span>
          </CommentNum>
        </AdditionalInfo>
      </CardDoc>
    </CardWrap>
  );
}
