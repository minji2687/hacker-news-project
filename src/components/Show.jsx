import ShowCard from "./card/ShowCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import ShowMainBanner from "../assets/showMainBanner.svg";
import { CardList } from "./CardList";

export default function Show({ showData }) {
  return (
    <MainContentWrap>
      <MainBanner background={ShowMainBanner} />
      <CardList>
        {showData.map((item) => (
          <ShowCard data={item.data} key={item.data.id} />
        ))}
      </CardList>
    </MainContentWrap>
  );
}
