import React from "react";
import { hot } from "react-hot-loader/root";
import style from './app.less';
function App(props) {
	console.log(props);
	return (
		<div className={style.a1}>
			<p>React with Webpack</p>
		</div>
	);
}

export default hot(App);
