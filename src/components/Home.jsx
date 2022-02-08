import TopCard from "./card/TopCard";
import ShowHomeCard from "./card/ShowHomeCard";
import MiddleBigCard from "./card/MiddleBigCard";
import RankerCard from "./card/RankerCard";
import SquareCard from "./card/SquareCard";
export default function Home() {
  return (
    <div>
      <RankerCard />
      <TopCard />
      <ShowHomeCard />
      <MiddleBigCard />
      <SquareCard />
    </div>
  );
}
