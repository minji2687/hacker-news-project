import styled from "@emotion/styled";
import TopCard from "./card/TopCard";
import ShowHomeCard from "./card/ShowHomeCard";
import RankerCard from "./card/RankerCard";
import SquareCard from "./card/SquareCard";
import SimpleCard from "./card/SimpleCard";
import HomeNewCard from "./card/HomeNewCard";

const HomeWrap = styled.main`
  background: #656565;
  padding-left: 20px;
  padding-top: 10px;
`;
const HomeInnerWrap = styled.div`
  padding-right: 20px;
`;

const HomeSubTitle = styled.h2`
  text-shadow: 0px 4px 4px #000000;
  color: #ffffff;
  font-size: 36px;
  line-height: 138.19%;
  display: flex;
  align-items: flex-end;
  height: 59px;
  margin: 10px 0;
`;

const HorizontalCardList = styled.div`
  width: 100%;
  overflow: scroll;
`;

const HorizontalCardListInnerWrap = styled.div`
  display: flex;
  width: 5000px;
  & > div + div {
    margin-left: 10px;
  }
`;

export default function Home({
  topData,
  newsData,
  showData,
  askData,
  jobsData,
}) {
  return (
    <HomeWrap>
      <HomeSubTitle>Ranker</HomeSubTitle>
      <RankerCard />
      <HomeSubTitle>TOP</HomeSubTitle>
      <HorizontalCardList>
        <HorizontalCardListInnerWrap>
          {topData.map(({ data }, index) => {
            return <TopCard data={data} key={data.id} ranking={index + 1} />;
          })}
        </HorizontalCardListInnerWrap>
      </HorizontalCardList>
      <HomeInnerWrap>
        <HomeSubTitle>NEW</HomeSubTitle>
        {newsData.map(({ data }, index) => {
          if (index > 2) {
            return;
          }
          return <HomeNewCard data={data} key={data.id} />;
        })}
      </HomeInnerWrap>
      <HomeSubTitle>SHOW</HomeSubTitle>
      <HorizontalCardList>
        <HorizontalCardListInnerWrap>
          {showData.map(({ data }) => {
            return <ShowHomeCard data={data} key={data.id} />;
          })}
        </HorizontalCardListInnerWrap>
      </HorizontalCardList>

      <HomeSubTitle>ASK</HomeSubTitle>
      <HorizontalCardList>
        <HorizontalCardListInnerWrap>
          {askData.map(({ data }) => {
            return <SquareCard data={data} key={data.id} />;
          })}
        </HorizontalCardListInnerWrap>
      </HorizontalCardList>
      <HomeInnerWrap>
        <HomeSubTitle>JOBS</HomeSubTitle>
        {jobsData.map(({ data }, index) => {
          if (index > 2) {
            return;
          }
          return (
            <SimpleCard isUrl={true} shape={"list"} data={data} key={data.id} />
          );
        })}
      </HomeInnerWrap>
    </HomeWrap>
  );
}
