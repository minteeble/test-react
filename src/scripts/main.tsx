import "../styles/main.scss";

import ReactDOM from "react-dom";
import App from "./App";

if (document.title === "") {
  document.title = "BUNNY"; //CollectionConfig.tokenName;
}

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(<App />, document.getElementById("app-wrapper"));
});
