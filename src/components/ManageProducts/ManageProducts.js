import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {


        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })


    }, [])

    const handleUpdate = (id) => {

        navigate(`/update/${id}`)

    }


    const handleDelete = (id, name) => {


        const procced = window.confirm(`Delete : ${name}`)


        if (procced) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)



                    if (data.deletedCount > 0) {

                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)



                    }




                })
        }


    }


    return (
        <div className='w-50 mx-auto'>

            {
                products.map(product => <div key={product._id}>

                    <h4>{product?.name} <img style={{ width: '15%' }} src={product.img} alt="" /> <button onClick={() => handleDelete(product._id, product.name)} className='btn btn-danger'> Delete</button> <button onClick={() => handleUpdate(product._id)} className='btn btn-info'>Update</button></h4>



                </div>)
            }



        </div>
    );
};

export default ManageProducts;