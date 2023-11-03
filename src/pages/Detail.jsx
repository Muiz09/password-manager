import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar"
import axios from "axios";
import './detail.scss'
import lock from '../assets/lock.jpg'
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [data, setAllData] = useState([])
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordHidden(!isPasswordHidden);
  }


  useEffect(() => {
    axios.get(`http://localhost:3030/password/${id}`)
      .then((response) => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data.category);
  return (
    <>
      <div className="container-detail">
        <div className="card-detail">
          <div className="img-card">
            <img src={lock} />
          </div>
          <div className="content-card-detail">
            <p>Provider : <span>{data.provider}</span></p>
            <p>Email : <span>{data.email}</span></p>
            <p>Category : <span>{data.category}</span></p>
            <p>
              Password : <span>
                {isPasswordHidden ? '* * * * * *' : data.password}
              </span>
              <button onClick={togglePasswordVisibility}>
                {isPasswordHidden ? 'Show Password' : 'Hide Password'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )

}