import React from "react";
// import "<div className="" />
import "./Signin.css";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const SignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log("token");
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="button">
      <button onClick={handleLogIn} className="login">
        Log in with Google
      </button>
      <button onClick={handleLogIn} className="logout">Log out </button>
    </div>
  );
};

export default SignIn;
