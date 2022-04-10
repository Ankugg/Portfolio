import Intro from "./component/intro/intro";
import About from "./component/About/about";
// import ProductList from "./component/ProductList/ProductList";
import Contact from "./component/Contact/Contact";
import Toggle from "./component/toggle/toggle";

import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkmode ? "#222" : "white",
        color: darkmode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      {/* <ProductList /> */}
      <Contact />
    </div>
  );
}

export default App;
