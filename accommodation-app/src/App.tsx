import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Places from "./pages/Places";
import Booking from "./pages/Booking";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/myPlaces" element={<Places />} />
        <Route path="/myBookings" element={<Booking />} />
      </Routes>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
