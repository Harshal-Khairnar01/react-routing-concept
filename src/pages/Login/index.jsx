import React from "react";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const onLoginClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isLoggedIn && (
        <>
          <p>Please enter your credentials to log in.</p>
          <label>
            Mobile Number
            <input placeholder="Enter mobile number" maxLength={10} />
          </label>
        </>
      )}

      <button onClick={onLoginClick}>{!isLoggedIn ? "Login" : "Logout"}</button>
    </div>
  );
};

export default Login;
