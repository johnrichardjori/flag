import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Flag from "./Flag/Flag";
// import Stopwatch from "./Stopwatch/Stopwatch";
// import FullNameForm from "./Fullname/Fullname";
// import Counter from "./Counter/Counter";
import Pagination from "./Xpagination/Xpagination";
import Calculator from "./Calculator/Calculator";
import XLogin from "./Xlogin/Xlogin";
import Countrysearch from "./Xcountry/Countrysearch";
import Counterclass from "./Counterclass/Counterclass";
import Weatherapp from "./Weather/Weatherapp";
import XSpellCheck from "./Xspellcheck/Xspell";
import XDictionary from "./Xdictionary/Xdictionary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <XDictionary />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
