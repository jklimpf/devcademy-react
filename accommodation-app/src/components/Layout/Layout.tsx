import React, { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Fragment>
      <Navigation></Navigation>
      {props.children}
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
