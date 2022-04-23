import { useEffect, useState } from "react"


const useProduct = (id) => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/product/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return product

}



export default useProduct;
