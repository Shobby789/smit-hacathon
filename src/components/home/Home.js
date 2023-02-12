import React, { useState, useEffect } from "react";
import "./Home.css";
import headImg from "../../images/istockphoto-922783734-612x612.jpg";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import grocery from "../../images/Grocery.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const userCollectionRef = collection(db, "demo");
  const [demo, setDemo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setDemo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, [demo]);

  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  // if (!authenticated) {
  return (
    <>
      <div className="homePage">
        <div className="head"></div>
        <img src={headImg} alt="" />
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {demo.map((demo) => {
            return (
              <div className="item">
                <img src={grocery} alt="" />
                <p>{demo.itemName}</p>
                <p>
                  {demo.unitName} {demo.unitPrice}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
