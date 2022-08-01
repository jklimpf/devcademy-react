import classes from "./ReservationCard.module.css";
import Accommodation from "../../models/Accommodation";
import placeImg from "../../assets/place.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReservationCard = ({
  title,
  subtitle,
  description,
  type,
  categorization,
  personCount,
  imageUrl,
  freeCancelation,
  price,
  location,
  postalCode,
}: Accommodation) => {
  const starsNum = Array.from({ length: categorization }, (_, i) => i + 1);

  const stars = starsNum.map((star) => {
    return (
      <span key={star}>
        &#160; <FontAwesomeIcon icon={faStar} color="orange" />
      </span>
    );
  });

  return (
    <div className={classes.reservationCard}>
      <img src={placeImg} alt="place"></img>
      <div className={classes.details}>
        <h3>{title}</h3>
        <p> {stars}</p>
        <p>{type}</p>
        <p>{location}</p>
        <p>{postalCode}</p>
        <p>EUR {price} per night</p>
      </div>
    </div>
  );
};

export default ReservationCard;
