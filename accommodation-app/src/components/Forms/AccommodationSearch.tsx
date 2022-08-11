import classes from "./AccommodationSearch.module.css";
import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface SearchLocation {
  location: string;
  checkIn: string;
  checkOut: string;
  numberOfPeople: number;
  accomType: string;
}

const AccommodationSearch = () => {
  const navigate = useNavigate();

  const whereRef = useRef<HTMLInputElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);
  const accomTypeRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const where = whereRef.current?.value;
    const checkIn = checkInRef.current?.value;
    const checkOut = checkOutRef.current?.value;
    const people = peopleRef.current?.value;
    const accomType = accomTypeRef.current?.value;

    if (where && checkIn && checkOut && people && accomType) {
      const data: SearchLocation = {
        location: where,
        checkIn,
        checkOut,
        numberOfPeople: +people,
        accomType,
      };

      navigate("/searchResult", { state: { location: where } });
    }
  };
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchDiv}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.inputWrapper}>
            <label>Where are you going</label>
            <input ref={whereRef} type="text" />
          </div>

          <div className={classes.inputWrapper}>
            <label>Check in</label>
            <input ref={checkInRef} type="date" />
          </div>

          <div className={classes.inputWrapper}>
            <label>Check out</label>
            <input ref={checkOutRef} type="date" />
          </div>
          <div className={classes.inputWrapper}>
            <label>How many people?</label>
            <input ref={peopleRef} type="number" />
          </div>
          <div className={classes.inputWrapper}>
            <label>What type of accommodation</label>
            <input ref={accomTypeRef} type="text" />
          </div>
          <button>SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default AccommodationSearch;
