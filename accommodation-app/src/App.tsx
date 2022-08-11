import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Places from "./pages/Places";
import Booking from "./pages/Booking";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Layout/Footer";
import Homes from "./pages/Homes";
import Reservation from "./components/Reservation/Reservation";
import AccommodationSearchResult from "./pages/AccommodationSearchResultPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/myPlaces" element={<Places />} />
        <Route path="/myBookings" element={<Booking />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/searchResult" element={<AccommodationSearchResult />} />
      </Routes>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
