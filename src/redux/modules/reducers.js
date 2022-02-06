import { combineReducers } from "redux";
import news from "./news";
import show from "./show";
import ask from "./ask";
import jobs from "./jobs";

const reducer = combineReducers({
  news,
  show,
  ask,
  jobs,
});

export default reducer;
