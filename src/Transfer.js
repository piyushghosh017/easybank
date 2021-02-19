import React, { useState,useEffect } from "react";
import "./Transfer.css";

import {API} from "./backend";
import axios from "axios";

const Transfer = () => {
    const[value,setValue]=useState({
      
            name:"",
            amount:""
        
    })
    
    const handleSubmit=(e)=>{
        e.preventDefault();


    }

    const [items,setItems]=useState([]);
    

    useEffect(() => {
      
      axios.get(`${API}allUser`)
    .then(res => {
      setItems(res.name)
      console.log(res.name)
      console.log(res)
    }) 
    .catch(() => {
      console.log("something went wrong");
    });

    }, []);


  return (
  <div className="CreateAccForm">
    <form className="form" onSubmit={handleSubmit}>
      <h1> Transfer </h1>

      <label>Transfer to</label>
      <select >
      {items.map((item,id) => (

      <option key={item.id}>{item.name}</option>

      ) )}
     </select>

      <input
        placeholder="Name"
        name="name"
        value={value.name}
        onChange={e => setValue({...value ,name:e.target.value})}
      />


      <label>Amount</label>
      <input
        placeholder="Amout Xxxxxx"
        value={value.amount}
        onChange={(e) => setValue({...value,amount:e.target.value})}
      ></input>

      <button
        type="submit"
      >
        Submit
      </button>
    </form>

</div>
  );
};

export default Transfer;