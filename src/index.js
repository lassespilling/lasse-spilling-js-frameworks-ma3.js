import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const webfontsGenerator = require("webfonts-generator");

webfontsGenerator(
    {
        files: [
            "../src/assets/Karla-Regular.svg",
            "../src/assets/Karla-Bold.svg",
            "../src/assets/Gelion-Bold.svg"
        ],
        dest: "dest/"
    },
    function(error) {
        if (error) {
            console.log("Fail!", error);
        } else {
            console.log("Done!");
        }
    }
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
