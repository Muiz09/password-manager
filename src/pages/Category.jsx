import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from "../component/Navbar"
import './category.scss'
import { Link } from 'react-router-dom';

export default function Category({ category }) {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/password?category=${category}`)
                setdata(response.data)
            } catch (err) {
                console.error('Data Error', err)
            }
        }

        fetchData()
    }, [category])

    console.log(data, 'VVVVVVVVV');

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/password/${id}`);
            const updatedAccounts = data.filter((account) => account.id !== id);
            setdata(updatedAccounts);
            alert('Data berhasil dihapus');
        } catch (error) {
            console.error('Gagal menghapus data:', error);
        }
    };

    return (
        <div style={{display:'flex'}}>
            <Navbar />
            <div className='category-con'>
                <div className=''>
                    {data.map((el, index) => (
                        <div className='' key={index}>
                            {/* <img src={} className='' /> */}
                            <p> {el.provider} </p>
                            <p> {el.email} </p>
                            <p> {el.category} </p>
                            <div className=''>
                                <Link to={`/password/${el.id}`}>
                                    <button> Details </button>
                                </Link>
                                <button onClick={() => handleDelete(el.id)}> Delete </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
