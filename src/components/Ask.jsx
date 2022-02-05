import React from "react";
import Comment from "./Comment";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import Card from "./card/Card";
import askMainBanner from "../assets/askMainBanner.svg";
import { CardList } from "./CardList";

export default function Ask({ askData }) {
  return (
    <MainContentWrap>
      <MainBanner background={askMainBanner} />
      <CardList>
        {askData.map((item) => (
          <Card data={item.data} key={item.data.id} />
        ))}
      </CardList>
    </MainContentWrap>
  );

  // <Comment />;
}
