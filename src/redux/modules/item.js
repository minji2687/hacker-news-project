import axios from "axios";
// import { takeEvery } from "redux-saga/effects";

// const GET_ITEM_SAGA_START = "GET_ITEM_SAGA_START";

// export function getItemSagaStart(IDdata) {
//   console.log("IDdata", IDdata);
//   return {
//     type: GET_ITEM_SAGA_START,
//     IDdata,
//   };
// }

// function* requestItems(action) {
//   const dataArr = yield axios.all(
//     action.IDdata.map((id) =>
//       axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
//     )
//   );
//   return dataArr;
// }

// export function* itemSaga() {
//   yield takeEvery(GET_ITEM_SAGA_START, requestItems);
// }

export function requestItem(IDdata) {
  let startItemNum = 0;
  let endItemNum = 10;
  let sliceIDItem = IDdata.slice(startItemNum, endItemNum);

  return sliceIDItem.map((id) =>
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  );
}
