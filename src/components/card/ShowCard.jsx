import styled from "@emotion/styled";
import { CardWrap, CardInfo, CardDoc, Title } from "./Card";
import profile from "../../assets/profile.svg";

import { UserInfo, UserName } from "../Comment";
import { AdditionalInfo, PointNum, CommentNum } from "./CardAdditionalInfo";

export const ShowCardWrap = styled(CardWrap)`
  height: 106px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const ShowUserInfo = styled(UserInfo)`
  flex-direction: column;
  img {
    height: 30px;
    width: 30px;
    margin-bottom: 8.5px;
  }
`;

export const ShowCardInfo = styled(CardInfo)`
  width: auto;
`;

export const ShowUserName = styled(UserName)`
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
`;

export const ShowTitle = styled(Title)`
  font-size: 14px;
  line-height: 138.19%;
  -webkit-line-clamp: 2;
  min-height: auto;
`;

export const ShowAdditionalInfo = styled(AdditionalInfo)`
  justify-content: start;
  margin-left: -2px;
`;

export const ShowPointNum = styled(PointNum)`
  background-size: 23px;
  padding-left: 28px;
  font-size: 11.6471px;
`;

export const ShowCommentNum = styled(CommentNum)`
  background-size: 23px;
  font-size: 11.6471px;
  cursor: pointer;
`;

export default function ShowCard({ data, clickModal }) {
  return (
    <ShowCardWrap>
      <ShowCardInfo>
        <ShowUserInfo>
          <img src={profile} alt="profile" />
          <ShowUserName>linsomniac</ShowUserName>
        </ShowUserInfo>
      </ShowCardInfo>
      <CardDoc>
        <ShowTitle>{data.title}</ShowTitle>
        <ShowAdditionalInfo>
          <ShowPointNum>
            <span>97</span>
          </ShowPointNum>
          <ShowCommentNum onClick={() => clickModal(data)}>
            <span>100</span>
          </ShowCommentNum>
        </ShowAdditionalInfo>
      </CardDoc>
    </ShowCardWrap>
  );
}
