import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";
import News from "../components/News";

export default function NewsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsSagaStart());
  }, []);
  return <News />;
}
