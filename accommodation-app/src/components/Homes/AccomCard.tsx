import AccomCardModel from "../../models/AccomCardModel";
import classes from "./AccomCard.module.css";
import accomCardImg from "../../assets/AccommodationCard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AccomCard = ({
  title,
  location,
  price,
  categorization,
}: AccomCardModel) => {
  const starsNum = Array.from({ length: +categorization }, (_, i) => i + 1);

  const stars = starsNum.map((star) => {
    return (
      <span key={star}>
        <FontAwesomeIcon icon={faStar} color="orange" /> &#160;
      </span>
    );
  });
  return (
    <section className={classes.accomCardSection}>
      <div className={classes.cityCard}>
        <img src={accomCardImg} alt="accommodation card"></img>
        <div className={classes.details}>
          <h2>{title}</h2>
          <p>{location}</p>
          <h3>EUR {price}</h3>
          <p className={classes.stars}>{stars}</p>
        </div>
      </div>
    </section>
  );
};

export default AccomCard;
