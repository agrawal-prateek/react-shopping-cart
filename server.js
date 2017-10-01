import React from "react";
import ReactDOM from "react-dom";
import App from "./Jsx/itemsList.jsx";
import Reset from "./Jsx/resetButton.jsx";

/** @namespace ReactDOM.render */

ReactDOM.render(
    <Reset />, document.getElementById('resetDiv')
);
ReactDOM.render(
    <App />, document.getElementById('app')
);

