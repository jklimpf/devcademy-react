import classes from "./Locations.module.css";
import CityCard from "./CityCard";
import { useNavigate } from "react-router-dom";
import { cityCardDataJSON } from "../../data/city-card-data";

const Locations = () => {
  const cityCardData = JSON.parse(cityCardDataJSON);

  const cityCardList = new Array(15).fill(cityCardData);

  let navigate = useNavigate();

  const locationHandler = () => {
    navigate("/locations");
  };

  return (
    <section className={classes.locationSection}>
      <div className={classes.header}>
        <h2>Popular locations</h2>
        <button onClick={locationHandler} className={classes.btn}>
          VIEW ALL LOCATIONS&#160; &#xf061;
        </button>
      </div>
      <div className={classes.cityCards}>
        {cityCardList.map((card) => (
          <CityCard key={Math.random()} {...card}></CityCard>
        ))}
      </div>
    </section>
  );
};

export default Locations;
