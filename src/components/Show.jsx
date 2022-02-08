import ShowCard from "./card/ShowCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import ShowMainBanner from "../assets/showMainBanner.svg";
import { CardList } from "./CardList";
import CommentModalContainer from "../containers/CommentModalContainer";
import { useState } from "react";

export default function Show({ showData }) {
  const [modalData, setModalData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function clickModal(data) {
    setModalData(data);
    setOpenModal(true);
  }

  function closeModal() {
    console.log("close");
    setOpenModal(false);
  }
  return (
    <MainContentWrap>
      <MainBanner background={ShowMainBanner} />
      <CardList>
        {showData.map((item) => (
          <ShowCard
            data={item.data}
            key={item.data.id}
            clickModal={clickModal}
          />
        ))}
      </CardList>
      {openModal && (
        <CommentModalContainer
          showItemData={modalData}
          closeModal={closeModal}
        />
      )}
    </MainContentWrap>
  );
}
