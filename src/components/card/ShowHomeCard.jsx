import styled from "@emotion/styled";
import CardAdditionalInfo from "./CardAdditionalInfo";
import { CardDoc, Title, CreatedDate } from "./Card";
import profile from "../../assets/profile.svg";

import {
  ShowCardWrap,
  ShowUserInfo,
  ShowCardInfo,
  ShowUserName,
} from "./ShowCard";

const ShowHomeCardWrap = styled(ShowCardWrap)`
  flex-direction: column;
  width: 168px;
  height: 188px;
  align-items: center;
  padding-top: 6px;
`;

const ShowHomeTitle = styled(Title)`
  text-align: center;
`;

const ShowHomeUserInfo = styled(ShowUserInfo)`
  flex-direction: row;
`;

const ShowHomeCreatedDate = styled(CreatedDate)`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`;

export default function ShowHomeCard() {
  return (
    <ShowHomeCardWrap>
      <ShowHomeCreatedDate>3 min ago</ShowHomeCreatedDate>
      <ShowHomeTitle>
        Shoot the neural network before it shoots you{" "}
      </ShowHomeTitle>
      <ShowHomeUserInfo>
        <img src={profile} alt="profile" />
        <ShowUserName>linsomniac</ShowUserName>
      </ShowHomeUserInfo>
      <CardAdditionalInfo />
    </ShowHomeCardWrap>
  );
}
