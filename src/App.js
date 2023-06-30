import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Bigtitle from "./components/Bigtitle";
import Multitabs from "./components/Multitabs";
import Banner from "./components/Banner";
import Slideshow from "./components/Slideshow";
import Footage from "./components/Footage";
function App() {
  return (
    <div className="App w-full ">
      <TopMenu />
      <Bigtitle />
      <Multitabs />
      <Banner />
      <Slideshow />
      <Footage />
      {/* 
      <Hero />
      <Brands />
      <Categories />
      <Whychoose />
      <Products />
      <Footer />
      <Copyright /> */}
      <Routes>{/* <Route path="/tlh" element={ <Choose /> } /> */}</Routes>
    </div>
  );
}

export default App;
