import { FC } from "react";
import classes from "./PropertyInfo.module.css";

const PropertyInfo: FC<{
  personCount: number;
  type: string;
  price: number;
  location: string;
  postalCode: string;
}> = (props) => {
  return (
    <div className={classes.info}>
      <h4>Property info</h4>
      <p>{props.personCount} guests</p>
      <p>{props.type}</p>
      <p>EUR {props.price} per night</p>
      <p>{props.location}</p>
      <p>{props.postalCode}</p>
      <button className={classes.btn}>BOOK A STAY &#160; &#xf061;</button>
    </div>
  );
};

export default PropertyInfo;
