import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Signin.css";

export default function SignIn() {
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        alert("Logged in as " + user.email);
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <h2>
          Saylani Welfare <br />
          <span>online discount store</span>
        </h2>
        <form action="noaction.php">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(event) => setLoginEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(event) => setLoginPassword(event.target.value)}
            />
          </div>
          <div>
            <button id="signin-btn" onClick={signin}>
              Sign In
            </button>
          </div>
          <div>
            <button
              id="login"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Don't have an account? Register{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
