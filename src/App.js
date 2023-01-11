import "./styles.css";
import React from "react";
import SplashPage from "./components/SplashPage";
import package_json from "../package.json";

document.body.style.margin = 0;


window.__leonVersion = package_json.version;

const App = () => (
  <SplashPage/>
);

export default App;