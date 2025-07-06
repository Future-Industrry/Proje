import React from 'react'
import { useNavigate } from "react-router-dom";
import Data from "../components/Data";

export default function Home() {
  const navigate = useNavigate();
  
  return (
   <>
      <ul id="ul2">
      {Data.map((item, index) => (
        <li key={index} onClick={() => navigate("/fileuploader")}>
          <div id="divimg">
            <img src={item.image} alt="product" />
            <button className="dot-menu">...</button>
          </div>
          <h3>{item.name}</h3>
          <h4>{item.type}</h4>
          <p id="p1">{item.discripthion}</p>
        </li>
      ))}
    </ul>
   </>
  )
}
