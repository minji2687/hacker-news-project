import styled from "@emotion/styled";
import {
  CardWrap,
  CardInfo,
  CardDoc,
  Title,
  AdditionalInfo,
  PointNum,
  CommentNum,
} from "./Card";
import profile from "../../assets/profile.svg";

import { UserInfo, UserName } from "../Ask";

const ShowCardWrap = styled(CardWrap)`
  height: 106px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

const ShowUserInfo = styled(UserInfo)`
  flex-direction: column;
  img {
    height: 30px;
    width: 30px;
    margin-bottom: 8.5px;
  }
`;

const ShowUserName = styled(UserName)`
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
`;

const ShowTitle = styled(Title)`
  font-size: 14px;
  line-height: 138.19%;
`;

const ShowAdditionalInfo = styled(AdditionalInfo)`
  justify-content: start;
  margin-left: -2px;
`;

const ShowPointNum = styled(PointNum)`
  background-size: 23px;
  padding-left: 28px;
`;

const ShowCommentNum = styled(CommentNum)`
  background-size: 23px;
`;

export default function ShowCard() {
  return (
    <ShowCardWrap>
      <CardInfo>
        <ShowUserInfo>
          <img src={profile} alt="profile" />
          <ShowUserName>linsomniac</ShowUserName>
        </ShowUserInfo>
      </CardInfo>
      <CardDoc>
        <ShowTitle>
          Is there anywhere to buy a Raspberry Pi 3 or 4 at a “normal” price now
          buy a Pi ...
        </ShowTitle>
        <ShowAdditionalInfo>
          <ShowPointNum>
            <span>97</span>
          </ShowPointNum>
          <ShowCommentNum>
            <span>100</span>
          </ShowCommentNum>
        </ShowAdditionalInfo>
      </CardDoc>
    </ShowCardWrap>
  );
}
