import classes from "./Locations.module.css";
import CityCard from "./CityCard";

const cityCardDataJSON = `{  
	"name": "London",  
	"count": "5102"  
}`;

const Locations = () => {
  const cityCardData = JSON.parse(cityCardDataJSON);

  return (
    <section className={classes.locationSection}>
      <div className={classes.header}>
        <h2>Popular locations</h2>
        <button>VIEW ALL LOCATIONS</button>
      </div>
      <div className={classes.cityCards}>
        <CityCard {...cityCardData}></CityCard>
      </div>
    </section>
  );
};

export default Locations;
