import classes from "./SimpleSearch.module.css";
import { useRef } from "react";

const SimpleSearch = () => {
  const whereRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const where = whereRef.current?.value;

    console.log(where);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.formContainer}>
        <div className={classes.inputWrapper}>
          <label>Where are you going</label>
          <input ref={whereRef} type="text" />
        </div>
        <button>SEARCH</button>
      </div>
    </form>
  );
};

export default SimpleSearch;
