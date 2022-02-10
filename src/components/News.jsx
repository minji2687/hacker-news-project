import styled from "@emotion/styled";
import Card from "./card/Card";
import SubTitle from "./SubTitle";
import newsMainBanner from "../assets/newsMainBanner.svg";
import MainBanner from "./MainBanner";
import MainContentWrap from "./MainContentWrap";
import { CardList } from "./CardList";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";

const ObserverEl = styled.div``;

export default function News({ newsData }) {
  const ObserverRef = useRef(null);
  const dispatch = useDispatch();

  const options = {
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entry, observer) => {
      if (entry[0].intersectionRatio > 0) {
        dispatch(getNewsSagaStart());
      }
    }, options);
    observer.observe(ObserverRef.current);
  }, [ObserverRef, options]);

  return (
    <MainContentWrap>
      <MainBanner background={newsMainBanner} />
      <SubTitle>TOP 10</SubTitle>
      <CardList>
        {newsData.map((item) => (
          <Card data={item.data} key={item.data.id} />
        ))}
        <ObserverEl ref={ObserverRef} />
      </CardList>
    </MainContentWrap>
  );
}
