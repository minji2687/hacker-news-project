import Card from "./card/Card";
import SubTitle from "./SubTitle";
import newsMainBanner from "../assets/newsMainBanner.svg";
import MainBanner from "./MainBanner";
import MainContentWrap from "./MainContentWrap";
import { CardList } from "./CardList";

export default function News({ newsData }) {
  return (
    <MainContentWrap>
      <MainBanner background={newsMainBanner} />
      <CardList>
        <SubTitle>TOP 10</SubTitle>
        {newsData.map((item) => (
          <Card data={item.data} key={item.data.id} />
        ))}
      </CardList>
    </MainContentWrap>
  );
}
