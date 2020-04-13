import React from 'react';
import {hot} from 'react-hot-loader/root';
import 'antd/dist/antd.css';
import Btn from './components/Btn';
function App() {
  return (
    <div className={style.titles}>
        <p>React with Webpack</p>  
        <Btn />
    </div>
  );
}
export default hot(App);