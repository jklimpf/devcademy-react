import Accommodation from "../../models/Accommodation";
import classes from "./AccommodationDetails.module.css";
import placeImg from "../../assets/place.png";
import PropertyInfo from "./PropertyInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const AccommodationDetails = ({
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
    <section className={classes.accommodationDetails}>
      <img className={classes.img} src={placeImg} alt="place"></img>
      <div className={classes.details}>
        <div className={classes.description}>
          <div className={classes.title}>
            <h2>{title}</h2>
            <p> &#160;&#160;&#160;&#160;{stars}</p>
          </div>
          <p className={classes.subtitle}>{subtitle}</p>
          <h4>
            <FontAwesomeIcon icon={faCalendarAlt} color="orange" /> &#160; Free
            cancelation {freeCancelation ? "available" : "not available"}
          </h4>
          <p className={classes.descriptionParagraph}>{description}</p>
        </div>

        <div className={classes.info}>
          <PropertyInfo
            personCount={personCount}
            type={type}
            price={price}
            postalCode={postalCode}
            location={location}
          ></PropertyInfo>
        </div>
      </div>
    </section>
  );
};

export default AccommodationDetails;
