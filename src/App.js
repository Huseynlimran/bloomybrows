import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Do from "./Components/Do";
import Doing from "./Components/Doing";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Price from "./Components/Price";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Do />
      <Doing />
      <Price />
      <About />
      <Footer />
    </div>
  );
}

export default App;
