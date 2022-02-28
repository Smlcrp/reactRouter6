import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Currencies from "./pages/currencies";
import Price from "./pages/price";
import Main from "./pages/main";
import Nav from "./components/nav";
//Wrap the App Component with the Router component to enable the router features

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<App />} >
          <Route index element={<Main />} />
          <Route path="currencies/" element={<Currencies />} />
          <Route path="price/" element={<Price />} >
            <Route path=":symbol" element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();