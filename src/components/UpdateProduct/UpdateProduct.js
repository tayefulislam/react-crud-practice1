import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';

import useProduct from '../hooks/useProduct';



const UpdateProduct = () => {

    const id = useParams()



    // get prodcut using hook
    const product = useProduct(id)


    console.log(product)


    const handleUpdate = (event) => {

        event.preventDefault()

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;

        const product = { name, price, quantity, img }

        console.log(product)

        fetch(`http://localhost:5000/update/${id.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Info updated')

            })


    }

    return (
        <div className='w-50 mx-auto'>

            <h1 className='text-center'> Update Product </h1>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" name='name' defaultValue={product.name} required className="form-control" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" name='price' defaultValue={product.price} required className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" name='quantity' defaultValue={product.quantity} required className="form-control" />
                </div>


                <div className="mb-3">


                    <label className="form-label">Image Url</label>

                    <input type="text" name='img' className="form-control" defaultValue={product.img} />
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>


            <ToastContainer></ToastContainer>

        </div>
    );
};

export default UpdateProduct;