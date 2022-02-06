import SimpleCard from "./card/SimpleCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import { CardList } from "./CardList";
import jobsMainBanner from "../assets/jobsMainBanner.svg";

export default function Jobs({ jobsData }) {
  return (
    <MainContentWrap>
      <MainBanner background={jobsMainBanner} />
      <CardList>
        {jobsData.map((item) => (
          <SimpleCard shape={"list"} data={item.data} key={item.data.id} />
        ))}
      </CardList>
    </MainContentWrap>
  );
  // return <SimpleCard shape={"list"} />;
}
