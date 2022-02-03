import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";
import { getShowSagaStart } from "../redux/modules/show";
import Home from "../components/Home";

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsSagaStart());
    dispatch(getShowSagaStart());
  }, []);

  return <Home />;
}
