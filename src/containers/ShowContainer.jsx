import Show from "../components/Show";
import { useSelector } from "react-redux";

export default function ShowContainer() {
  const showData = useSelector((state) => state.show.showData);

  return <Show showData={showData} />;
}
