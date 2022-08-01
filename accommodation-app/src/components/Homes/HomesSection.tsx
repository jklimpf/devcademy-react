import AccomCard from "./AccomCard";
import classes from "./HomesSection.module.css";
import { useNavigate } from "react-router-dom";

const accommCardDataJSON = `{
  
    "title": "Sugar & Spice Apartments"  ,
    "location": "Split"  ,
    "price": 75  ,
    "categorization": 3  
  
}`;

const HomesSection = () => {
  const accommCardData = JSON.parse(accommCardDataJSON);
  const navigate = useNavigate();

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
        <AccomCard {...accommCardData}></AccomCard>
        <AccomCard {...accommCardData}></AccomCard>
        <AccomCard {...accommCardData}></AccomCard>
        <AccomCard {...accommCardData}></AccomCard>
        <AccomCard {...accommCardData}></AccomCard>
        <AccomCard {...accommCardData}></AccomCard>
      </div>
    </section>
  );
};

export default HomesSection;
