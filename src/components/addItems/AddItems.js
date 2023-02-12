import { useEffect } from "react";
import { useState } from "react";
import "./AddItems.css";
import { db } from "../../Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Home from "../home/Home";
import { useNavigate } from "react-router-dom";

function AddItems() {
  // creating a collection in firestore
  const userCollectionRef = collection(db, "demo");
  // states
  const [itemName, setItemName] = useState("");
  const [newDescription, setDescription] = useState(0);
  const [unitName, setUnitName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [condition, setCondition] = useState(false);

  const navigate = useNavigate();

  // adding new data in the firebase
  const createDemo = async () => {
    await addDoc(userCollectionRef, {
      itemName: itemName,
      description: newDescription,
      unitName: unitName,
      unitPrice: unitPrice,
    });
    setItemName("");
    setDescription("");
    setUnitName("");
    setUnitPrice("");
    // navigate("/home");
  };

  return (
    <div>
      <div className="user-profile">
        <h2>Admin Add Item</h2>
        <div>
          <input
            type="text"
            id="text"
            placeholder="Item Name"
            onChange={(event) => {
              setItemName(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            id="description"
            placeholder="Description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Unit Name kg, pound"
            onChange={(event) => setUnitName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Unit Price"
            onChange={(event) => setUnitPrice(event.target.value)}
          />
        </div>

        <div>
          <button className="" onClick={createDemo}>
            AddItem
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
