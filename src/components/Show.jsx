import ShowCard from "./card/ShowCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import ShowMainBanner from "../assets/showMainBanner.svg";
import { CardList } from "./CardList";
import CommentModalContainer from "../containers/CommentModalContainer";
import { useState } from "react";
import MiddleBigCard from "./card/MiddleBigCard";

export default function Show({ showData }) {
  const [modalData, setModalData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function clickModal(data) {
    setModalData(data);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }
  return (
    <MainContentWrap>
      <MainBanner background={ShowMainBanner} />
      <CardList>
        {showData.map((item, index) => {
          if ((index + 1) % 6 === 0) {
            return (
              <MiddleBigCard
                data={item.data}
                key={item.data.id}
                clickModal={clickModal}
              />
            );
          }
          return (
            <ShowCard
              data={item.data}
              key={item.data.id}
              clickModal={clickModal}
            />
          );
        })}
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
