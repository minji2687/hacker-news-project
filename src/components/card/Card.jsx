import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CardAdditionalInfo from "./CardAdditionalInfo";

export const CardWrap = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px #000000;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 16px;
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
  width: 70%;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 7.5px;
  line-height: 138.19%;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Card({ data }) {
  return (
    <CardWrap>
      <CardInfo>
        <Ranking>1</Ranking>
        <Writer>{data.by}</Writer>
        <CreatedDate>1 min ago</CreatedDate>
      </CardInfo>
      <CardDoc>
        <Title>
          <Link to={`/ask/${data.id}`} key={data.id}>
            {data.title}
          </Link>
        </Title>
        <CardAdditionalInfo score={data.score} />
      </CardDoc>
    </CardWrap>
  );
}
