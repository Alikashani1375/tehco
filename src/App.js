import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Whychoose from "./components/Whychoose";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App w-full">
      <TopMenu />
      <Hero />
      <Brands />
      <Categories />
      <Whychoose />
      <Products />
      <Footer />
      <Copyright />
      <Routes>{/* <Route path="/tlh" element={ <Choose /> } /> */}</Routes>
    </div>
  );
}

export default App;
