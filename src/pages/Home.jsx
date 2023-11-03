import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar"
import axios from "axios";
import './home.scss'
import lock from '../assets/lock.jpg'
import { Link } from "react-router-dom";


export default function Home() {
  const [data, setAllData] = useState([])

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3030/password/${id}`);

      if (response.status === 200) {
        alert('Data berhasil dihapus');
        axios.get('http://localhost:3030/password')
        .then((response) => {
          setAllData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      } else {
        alert('Gagal menghapus data');
      }
    } catch (error) {
      console.error('>>>>>>>> kok error', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3030/password')
      .then((response) => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', backgroundColor: 'grey' }}>
      <Navbar />
      <div className="container">
        <div className="grid-container">
          {data?.map((el, index) => (
            <div key={index} className="card">
              <div className="img-card">
                <img src={lock} />
              </div>
              <div className="content-card">
                <p>Provider : <span>{el.provider}</span></p>
                <p>Email : <span>{el.email}</span></p>
                <p>Category : <span>{el.category}</span></p>
              </div>
              <Link to={`/password/${el.id}`}>
                <button>Detail</button>
              </Link>
              <button onClick={() => deleteData(el.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}