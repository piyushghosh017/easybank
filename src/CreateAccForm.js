import React, { useState, useEffect } from "react";
import "./CreateAccForm.css";

import {createUser} from "./auth/index";
import {API} from "./backend";
import axios from "axios";


const CreateAccForm = () => {
    
  const [form, setForm] = useState({
    name:"",
    email:"",
    balance:""
  });
  // const [email, setEmail] = useState("");
  // const [balance, setBalance] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //createUser(form)
    // .then(res => {
    //   console.log(res)
    //   setForm({
    //     name: "",
    //     email: "",
    //     balance: "",
    //   })
    // })
    // .catch(err => console.log(err));

    // setName("");
    // setEmail("");
    // setBalance("");

  //   fetch(`${API}create`,{
  //     method:"POST",
  //     headers:{
  //         Accept:"application/json"
  //     },
  //     body: form
  // })
  // .then(response => {
  //     // return response.json()
  //     console.log(response);
  // })
  // .catch(err => console.log(err));

  axios.post(`${API}create`, form)
  .then(res => console.log(res))
  .catch( err => console.log(err));

  };

  return (
<div className="CreateAccForm">


    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form ,name: e.target.value})}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form ,email: e.target.value})}
      />

      <label>Balance</label>
      <input
        placeholder="Amout Xxxxxx"
        value={form.balance}
        onChange={(e) => setForm({ ...form ,balance: e.target.value})}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
</div>
  );
};

export default CreateAccForm;