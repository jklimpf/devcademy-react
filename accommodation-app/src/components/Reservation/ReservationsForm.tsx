import React from "react";
import classes from "./ReservationForm.module.css";
import { useRef } from "react";

const ReservationForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const guestNumberRef = useRef<HTMLInputElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredName = nameRef.current?.value;
    const enteredEmail = emailRef.current?.value;
    const enteredSuestNumber = guestNumberRef.current?.value;
    const enteredCkeckIn = checkInRef.current?.value;
    const enteredCheckOut = checkOutRef.current?.value;
    console.log(
      enteredName,
      enteredEmail,
      enteredSuestNumber,
      enteredCkeckIn,
      enteredCheckOut
    );
  };
  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <input ref={nameRef} type="text" placeholder="Full Name" />
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input
          ref={guestNumberRef}
          type="number"
          placeholder="Number of guests"
        />
        <div className={classes.checkInput}>
          <input ref={checkInRef} type="date" name="Check in" />
          <input ref={checkOutRef} type="date" />
        </div>
        <button className={classes.btn}>BOOK YOUR STAY</button>
      </form>
    </div>
  );
};

export default ReservationForm;
