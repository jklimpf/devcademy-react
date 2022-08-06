import { FC } from "react";
import classes from "./PropertyInfo.module.css";
import { useNavigate } from "react-router-dom";

const PropertyInfo: FC<{
  personCount: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
}> = (props) => {
  const navigate = useNavigate();

  const reservationHandler = () => {
    navigate("/reservation");
  };

  return (
    <div className={classes.info}>
      <h4>Property info</h4>
      <p>{props.personCount} guests</p>
      <p>{props.type}</p>
      <p>EUR {props.price} per night</p>
      <p>{props.location}</p>
      <p>{props.postalCode}</p>
      <button onClick={reservationHandler} className={classes.btn}>
        BOOK A STAY &#160; &#xf061;
      </button>
    </div>
  );
};

export default PropertyInfo;
