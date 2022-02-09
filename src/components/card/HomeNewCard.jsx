import styled from "@emotion/styled";

import { Link } from "react-router-dom";
import {
  CardWrap,
  CardInfo,
  Ranking,
  Writer,
  CreatedDate,
  CardDoc,
  Title,
} from "./Card";
import CardAdditionalInfo from "./CardAdditionalInfo";

const HomeNewCardInfo = styled(CardInfo)`
  background: #ffedab;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const CardDocInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

export default function HomeNewCard({ data }) {
  return (
    <CardWrap>
      <HomeNewCardInfo>
        <UserProfile></UserProfile>
        <Writer>{data.by}</Writer>
      </HomeNewCardInfo>
      <CardDoc>
        <Title>
          <Link to={`/ask/${data.id}`} key={data.id}>
            {data.title}
          </Link>
        </Title>
        <CardDocInfo>
          <CardAdditionalInfo
            scoreNum={data.score}
            commentNum={data.descendants}
          />
          <CreatedDate>1 min ago</CreatedDate>
        </CardDocInfo>
      </CardDoc>
    </CardWrap>
  );
}
