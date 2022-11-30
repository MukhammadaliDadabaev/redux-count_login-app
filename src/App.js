/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import News from "./News";
import News_2 from "./News_2";
import Login from "./redux/actions/Login";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <hr />
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <News counter={count} />
      <hr />
      <News_2 />
      <hr />
      <Login />
    </div>
  );
}

export default App;
