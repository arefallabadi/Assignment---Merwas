import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Featured from "./components/featured/featured";
import Collection from "./components/collection/collection";
import Escapes from "./components/escapes/escapes";
import Activities from "./components/activities/activities";
import Store from "./components/store/store";
import Restaurants from "./components/restaurants/restaurants";
import Beauty from "./components/beauty/beauty";
import House from "./components/house/house";
import Fitness from "./components/fitness/fitness";
import Automotive from "./components/automotive/automotive";


function App() {
  return (
    <>
      <Header />
      <Home />
      <Featured />
      <Collection />
      <Escapes />
      <Activities />
      <Store />
      <Restaurants/>
      <Beauty/>
      <House/>
      <Fitness/>
      <Automotive/>

      <Footer />
    </>
  );
}

export default App;
