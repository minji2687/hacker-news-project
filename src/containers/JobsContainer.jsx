import Jobs from "../components/Jobs";
import { useSelector } from "react-redux";

export default function JobsContainer() {
  const jobsData = useSelector((state) => state.jobs.jobsData);

  return <Jobs jobsData={jobsData} />;
}
