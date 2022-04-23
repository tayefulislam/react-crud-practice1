import React from 'react';

const Product = ({ product }) => {


    const handleDelete = (id, name) => {


        const procced = window.confirm(`Delete : ${name}`)


        if (procced) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                })
        }


    }

    return (
        <div>

            <h4>{product?.name}   <button onClick={() => handleDelete(product._id, product.name)} className='btn btn-danger'> Delete</button></h4>




        </div>
    );
};

export default Product;