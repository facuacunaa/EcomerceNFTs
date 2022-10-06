import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"

const ItemDetailContainer = () => {
 const [product, setProduct] =useState({})
 const [Loading, setLoading] = useState(true)
       
 
 
   useEffect (() => {
        getProduct('1').then(response => {
            setProduct(response)
        }).finally (() => {
            setLoading(false)
        })

       },[])
    if (Loading) {
        return <h1>Cargando...</h1>
    }
       

return (
    <div>
        <h1>Detalles del producto</h1>
        
        <div> {product.name} {product.price} {product.img}</div>
    </div>
)
}
 

 export default ItemDetailContainer