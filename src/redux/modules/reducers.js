import { combineReducers } from "redux";
import news from "./news";
import show from "./show";
import ask from "./ask";

const reducer = combineReducers({
  news,
  show,
  ask,
});

export default reducer;
