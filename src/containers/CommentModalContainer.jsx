import React from "react";
import { useEffect, useState } from "react";
import CommentModal from "../components/CommentModal";
import { requestItems } from "../redux/modules/item";

export default function CommentModalContainer({ showItemData, closeModal }) {
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    function fetchComments(data) {
      if (!data.kids) {
        return data;
      }
      const commentsArr = Promise.all(requestItems(data.kids)).then((res) =>
        res.map(({ data }) => {
          return fetchComments(data);
        })
      );
      data.comments = commentsArr;
      return data;
    }

    async function fetchData() {
      await fetchComments(showItemData);
      showItemData.comments &&
        showItemData.comments.then((res) => {
          setCommentsData(res);
        });
    }

    fetchData();
  }, []);

  return (
    <CommentModal
      showItemData={showItemData}
      commentsData={commentsData}
      closeModal={closeModal}
    />
  );
}
