import styled from "@emotion/styled";
import { CardList } from "./CardList";
import Comment from "./Comment";
import { Title, CreatedDate, Writer } from "./card/Card";
import CardAdditionalInfo from "./card/CardAdditionalInfo";

const AskDetailWrap = styled.div`
  padding: 0 4%;
  background: #656565;
  padding-top: 10px;
  min-height: 100vh;
`;
const AskInfo = styled.div`
  height: 36px;
  background: #fffbf7;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

const AskTitle = styled(Title)`
  border-radius: 8px;
  background: #fff;
  font-size: 24px;
  line-height: 33px;
  padding: 24px 12px;
`;
const UserID = styled(Writer)`
  margin: 0;
`;

const AskCreatedDate = styled(CreatedDate)`
  margin: 0;
  font-size: 14px;
`;

const AskContents = styled.div`
  padding: 14px 10px;
  background: #fff;
  line-height: 22px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const CommentDivision = styled.div`
  height: 51px;
  background: #ffc700;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
`;

export default function AskDetail({ askCommnetsData, askDetailData }) {
  console.log("askCommnetsData", askCommnetsData);
  console.log("askDetailData", askDetailData);
  return (
    <AskDetailWrap>
      <AskInfo>
        <CardAdditionalInfo />
        <UserID>{askDetailData.by}</UserID>
        <AskCreatedDate>2 days ago</AskCreatedDate>
      </AskInfo>
      <AskTitle>{askDetailData.title}</AskTitle>
      <AskContents>{askDetailData.text}</AskContents>
      <CommentDivision>comment</CommentDivision>
      {/* <CardList> */}
      {askCommnetsData &&
        askCommnetsData.map((commnet) => {
          console.log(commnet);
          return <Comment commnet={commnet} key={commnet.id} />;
        })}
      {/* </CardList> */}
    </AskDetailWrap>
  );
}
