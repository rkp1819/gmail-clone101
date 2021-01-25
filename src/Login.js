import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
          alt=""
        />{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            signIn();
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
