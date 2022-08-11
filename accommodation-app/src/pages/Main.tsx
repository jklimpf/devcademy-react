import { Fragment } from "react";
import Header from "../components/Layout/Header";
import AccommodationDetails from "../components/Accommodation/AccommodationDetails";
import { accommodationDataJSON } from "../data/accommodation-data";

import Locations from "../components/Locations/Locations";
import HomesSection from "../components/Homes/HomesSection";
import AccommodationSearch from "../components/Forms/AccommodationSearch";
const Main = () => {
  const accommodationData = JSON.parse(accommodationDataJSON);

  return (
    <Fragment>
      <Header></Header>
      <AccommodationSearch></AccommodationSearch>
      <AccommodationDetails {...accommodationData}></AccommodationDetails>
      <Locations></Locations>
      <HomesSection></HomesSection>
    </Fragment>
  );
};

export default Main;
