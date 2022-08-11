import AccomCard from "../components/Homes/AccomCard";
import classes from "./Homes.module.css";
import { accommCardDataJSON } from "../data/accomCard-data";

const Homes = () => {
  const accommCardData = JSON.parse(accommCardDataJSON);

  const accommCardList = new Array(15).fill(accommCardData);

  return (
    <div className={classes.homes}>
      <h2>Homes</h2>
      <div className={classes.accomCard}>
        {accommCardList.map((card) => (
          <AccomCard key={Math.random()} {...card}></AccomCard>
        ))}
      </div>
    </div>
  );
};

export default Homes;
