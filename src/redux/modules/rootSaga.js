import { all } from "redux-saga/effects";
import { newsSaga } from "./news";
import { showSaga } from "./show";
import { askSaga } from "./ask";
import { jobsSaga } from "./jobs";

export default function* rootSaga() {
  yield all([newsSaga(), showSaga(), askSaga(), jobsSaga()]);
}
