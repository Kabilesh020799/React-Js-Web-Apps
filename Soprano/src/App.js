import "./App.css";
import Core from "./components/Core/Core";
import Features from "./components/Features/Features";
import Function from "./components/Function/Function";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Pricing from "./components/Pricing/Pricing";
import Quality from "./components/Quality/Quality";
import Questions from "./components/Questions/Questions";
import Tutorial from "./components/Tutorial/Tutorial";

function App() {
  return (
    <div className="App">
      <Navigation /> <Home />
      <Features />
      <Quality />
      <Core />
      <Function />
      <Pricing />
      <Tutorial />
      <Questions />
    </div>
  );
}

export default App;
