import PlaceCardType from "../../models/PlaceCardModel";
import classes from "./PlaceCard.module.css";

const PlaceCard = ({ title, location, subtitle, img }: PlaceCardType) => {
  return (
    <div className={classes.placeDiv}>
      <img src={img} alt="place"></img>
      <h2>{title}</h2>
      <p>{location}</p>
      <h3>{subtitle}</h3>
      <div className={classes.buttons}>
        <button className={classes.edit}>EDIT</button>
        <button className={classes.delete}>DELETE PLACE</button>
      </div>
    </div>
  );
};

export default PlaceCard;
