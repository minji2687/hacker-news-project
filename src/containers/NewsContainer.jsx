import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";
import News from "../components/News";
import { useSelector } from "react-redux";

export default function NewsContainer() {
  const newsData = useSelector((state) => state.news.newsData);

  console.log("container", newsData);

  return <News newsData={newsData} />;
}
