import Card from "./card/Card";
import styled from "@emotion/styled";
import SubTitle from "./SubTitle";
import newsMainBanner from "../assets/newsMainBanner.svg";
import MainBanner from "./MainBanner";
import MainContentWrap from "./MainContentWrap";

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #656565;
  padding: 16px 4%;
`;

export default function News({ newsData }) {
  return (
    <MainContentWrap>
      <MainBanner background={newsMainBanner} />
      <CardList>
        <SubTitle>TOP 10</SubTitle>
        {newsData.map((item) => (
          <Card data={item.data} />
        ))}
      </CardList>
    </MainContentWrap>
  );
}
