import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Account create successfully");
        // navigate("/home");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage);
        console.log(errorMessage);
        // ..
      });
    navigate("/home");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate("/home");
  };
  return (
    <div className="signup-container">
      <h2>
        Saylani Welfare <br />
        <span>online discount store</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button onClick={signup}>sign up</button>
        </div>
        <div>
          <button
            id="login"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Already have an account? Login
          </button>
        </div>
      </form>
    </div>
  );
}
