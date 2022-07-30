import React from "react";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={classes.layout}>
      <Navigation></Navigation>
      {props.children}
    </div>
  );
};

export default Layout;
