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
import { useState } from "react";

const JobsListInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-right: 4%;
`;

const JobsCardList = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ listFormat }) =>
    listFormat === "list" ? "column" : "row"};
  justify-content: start;
`;

export default function Jobs({ jobsData }) {
  const [listFormat, setListFormat] = useState("list");

  function handleListFormatToList() {
    setListFormat("list");
  }

  function handleListFormatToSquare() {
    setListFormat("square");
  }

  return (
    <MainContentWrap>
      <MainBanner background={jobsMainBanner} />
      <JobsListInfo>
        <SubTitle>Jobs</SubTitle>
        <div>
          <span onClick={handleListFormatToList}>
            <img src={listIcon} alt="리스트 형식" />
          </span>
          <span onClick={handleListFormatToSquare}>
            <img src={squareIcon} alt="사각형카드 형식" />
          </span>
        </div>
      </JobsListInfo>
      <JobsCardList>
        {jobsData.map((item, index) => {
          if (listFormat === "list" && (index + 1) % 6 === 0) {
            return <MiddleBigCard data={item.data} key={item.data.id} />;
          } else if (listFormat === "square" && (index + 1) % 7 === 0) {
            return <MiddleBigCard data={item.data} key={item.data.id} />;
          }

          if (listFormat === "list") {
            return (
              <SimpleCard shape={"list"} data={item.data} key={item.data.id} />
            );
          }
          return (
            <SimpleCard shape={"square"} data={item.data} key={item.data.id} />
          );
        })}
      </JobsCardList>
    </MainContentWrap>
  );
}
