import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const login = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>👇 Your status:</h3>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>CHECK</button>
      {login ? <p>Your SIGNED IN 🖐🎉</p> : <p>Your NOT 😢👆</p>}
    </div>
  );
};

export default Login;
