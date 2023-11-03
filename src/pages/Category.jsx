import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from "../component/Navbar"
// import Password from '../../assets/password.png'
import { Link } from 'react-router-dom';

export default function Category ({ category }) {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/password?category=${category}`)
                setdata(response.data)
            } catch (err) {
                console.error('Data Error', err)
            }
        }

        fetchData()
    }, [category])

    console.log(data);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/password/${id}`);
            const updatedAccounts = data.filter((account) => account.id !== id);
            setdata(updatedAccounts);
            alert('Data berhasil dihapus');
        } catch (error) {
            console.error('Gagal menghapus data:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='category-con'>
                <h1> {category.charAt(0).toUpperCase() + category.slice(1)} Data Accounts </h1>
                <div className={styles.container__card}>
                    {account.map((item, index) => (
                        <>
                            <div className={styles.container__card__content} key={index}>
                                <img src={Password} className={styles.content__image} />
                                <p> {item.provider} </p>
                                <p> {item.email} </p>
                                <p> {item.category} </p>
                                <div className={styles.content__button}>
                                    <Link to={`/detailUser/${item.id}`}>
                                        <button> Details </button>
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)}> Delete </button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
