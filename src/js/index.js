import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "../styles/index.scss";

import { SimpleCounter } from "./component/counter.js";

let counter = 0;
setInterval(() => {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	ReactDOM.render(
		<SimpleCounter
			five={five}
			four={four}
			three={three}
			two={two}
			one={one}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
// ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
