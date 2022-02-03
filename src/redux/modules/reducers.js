import { combineReducers } from "redux";
import news from "./news";
import show from "./show";

const reducer = combineReducers({
  news,
  show,
});

export default reducer;
