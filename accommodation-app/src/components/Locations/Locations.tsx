import classes from "./Locations.module.css";
import CityCard from "./CityCard";
import { useNavigate } from "react-router-dom";

const cityCardDataJSON = `{  
	"name": "London",  
	"count": "5102"  
}`;

const Locations = () => {
  const cityCardData = JSON.parse(cityCardDataJSON);
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
        <CityCard {...cityCardData}></CityCard>
        <CityCard {...cityCardData}></CityCard>
        <CityCard {...cityCardData}></CityCard>
        <CityCard {...cityCardData}></CityCard>
        <CityCard {...cityCardData}></CityCard>
      </div>
    </section>
  );
};

export default Locations;
