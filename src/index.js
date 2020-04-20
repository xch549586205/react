import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./prescribe/App";
import * as serviceWorker from "./serviceWorker";
import "./flexible";
// import "./index.css";

ReactDOM.render(
	<div style={{ height: "100%" }}>
		<Router>
			<Route render={(props) => <App {...props} />} />
		</Router>
	</div>,
	document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
