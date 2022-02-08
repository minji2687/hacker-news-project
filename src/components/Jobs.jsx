import styled from "@emotion/styled";
import SimpleCard from "./card/SimpleCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import { CardList } from "./CardList";
import jobsMainBanner from "../assets/jobsMainBanner.svg";
import SubTitle from "./SubTitle";
import listIcon from "../assets/listIcon.svg";
import squareIcon from "../assets/squareIcon.svg";
import MiddleBigCard from "./card/MiddleBigCard";

const JobsListInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-right: 4%;
`;

export default function Jobs({ jobsData }) {
  return (
    <MainContentWrap>
      <MainBanner background={jobsMainBanner} />
      <JobsListInfo>
        <SubTitle>Jobs</SubTitle>
        <div>
          <span>
            <img src={listIcon} alt="리스트 형식" />
          </span>
          <span>
            <img src={squareIcon} alt="사각형카드 형식" />
          </span>
        </div>
      </JobsListInfo>
      <CardList>
        {jobsData.map((item, index) => {
          if ((index + 1) % 6 === 0) {
            return <MiddleBigCard data={item.data} key={item.data.id} />;
          }
          return (
            <SimpleCard shape={"list"} data={item.data} key={item.data.id} />
          );
        })}
      </CardList>
    </MainContentWrap>
  );
}
