import classes from "./AccommodationSearch.module.css";

const AccommodationSearch = () => {
  return (
    <div className={classes.searchDiv}>
      <form className={classes.form}>
        <div className={classes.inputWrapper}>
          <label>Where are you going</label>
          <input type="text" />
        </div>

        <div className={classes.inputWrapper}>
          <label>Check in</label>
          <input type="text" />
        </div>

        <div className={classes.inputWrapper}>
          <label>Check out</label>
          <input type="text" />
        </div>
        <div className={classes.inputWrapper}>
          <label>How many people?</label>
          <input type="text" />
        </div>
        <div className={classes.inputWrapper}>
          <label>What type of accommodation</label>
          <input type="text" />
        </div>
        <button>SEARCH</button>
      </form>
    </div>
  );
};

export default AccommodationSearch;
