import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className={classes.bar}>
      <Link to="/" className={classes.home}>
        <h2>Staycation</h2>
      </Link>
      <div className={classes.navlinks}>
        <Link to="/locations" className={classes.link}>
          Locations
        </Link>
        <Link to="/myPlaces" className={classes.link}>
          My places
        </Link>
        <Link to="/myBookings" className={classes.link}>
          My bookings
        </Link>
      </div>
      <div>
        <Link to="/" className={classes.logout}>
          LOGOUT
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
