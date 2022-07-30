import CityCardModel from "../../models/CityCardModel";
import cityCardImg from "../../assets/CityCard.png";
import classes from "./CityCard.module.css";

const CityCard = ({ name, count }: CityCardModel) => {
  return (
    <section className={classes.cityCardSection}>
      <div className={classes.cityCard}>
        <img src={cityCardImg} alt="City card"></img>
        <div className={classes.details}>
          <h2>{name}</h2>
          <p>{count.toLocaleString()} properties</p>
        </div>
      </div>
    </section>
  );
};

export default CityCard;
