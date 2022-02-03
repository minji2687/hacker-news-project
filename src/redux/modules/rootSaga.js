import { all } from "redux-saga/effects";
import { newsSaga } from "./news";
import { showSaga } from "./show";

export default function* rootSaga() {
  yield all([newsSaga(), showSaga()]);
}
