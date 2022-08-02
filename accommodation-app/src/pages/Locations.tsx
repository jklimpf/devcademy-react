import SimpleSearch from "../components/Forms/SimpleSearch";
import classes from "./Locations.module.css";

const Locations = () => {
  return (
    <div className={classes.locations}>
      <h2>All locations</h2>
      <SimpleSearch></SimpleSearch>
    </div>
  );
};

export default Locations;
