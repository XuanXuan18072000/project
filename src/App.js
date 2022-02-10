import React from 'react';
 import style from "./App.module.css"
import Signin from "./components/Signin/index"
import { useHistory } from 'react-router-dom';
// import Dashboard from './components/Dashboard/DashBoard';
export default function App() {
  const history = useHistory();
    return (
      <div className={style.total_container}>
        {/* <Dashboard/> */}
      <Signin/>
      </div>
  );
}
