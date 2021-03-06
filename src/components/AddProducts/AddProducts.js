import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProducts = () => {


    const handleSubmit = (event) => {

        event.preventDefault()

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;

        const product = { name, price, quantity, img }

        console.log(product)

        fetch('http://localhost:5000/product/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    event.target.reset()
                }





            })





    }




    return (
        <div className='w-50 mx-auto'>

            <h1 className='text-center'>Add Product </h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" name='name' required className="form-control" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" name='price' required className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" name='quantity' required className="form-control" />
                </div>


                <div className="mb-3">


                    <label className="form-label">Image Url</label>

                    <input type="text" name='img' className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>
    );
};

export default AddProducts;