import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);