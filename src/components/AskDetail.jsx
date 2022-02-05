import React from "react";
import { CardList } from "./CardList";
import Comment from "./Comment";

export default function AskDetail({ askCommnetsData, askDetailData }) {
  return (
    <CardList>
      {askCommnetsData &&
        askCommnetsData.map((commnet) => {
          console.log(commnet);
          return <Comment commnet={commnet} key={commnet.id} />;
        })}
    </CardList>
  );
}
