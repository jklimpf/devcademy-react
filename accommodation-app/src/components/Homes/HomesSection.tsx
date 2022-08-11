import AccomCard from "./AccomCard";
import classes from "./HomesSection.module.css";
import { useNavigate } from "react-router-dom";
import { accommCardDataJSON } from "../../data/accomCard-data";

const HomesSection = () => {
  const accommCardData = JSON.parse(accommCardDataJSON);
  const navigate = useNavigate();

  const accommCardList = new Array(15).fill(accommCardData);

  const homesHandler = () => {
    navigate("/homes");
  };

  return (
    <section className={classes.homesSection}>
      <div className={classes.header}>
        <h2>Homes guests love</h2>
        <button onClick={homesHandler} className={classes.btn}>
          VIEW ALL HOMES&#160; &#xf061;
        </button>
      </div>
      <div className={classes.accomCard}>
        {accommCardList.map((card) => (
          <AccomCard key={Math.random()} {...card}></AccomCard>
        ))}
      </div>
    </section>
  );
};

export default HomesSection;
