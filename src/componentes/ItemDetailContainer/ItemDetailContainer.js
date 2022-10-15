import {useState, useEffect} from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
 const [product, setProduct] =useState({})
 const [loading, setLoading] = useState(true)
       
 const { productId } = useParams()
 
   useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally (() => {
            setLoading(false)
        })

       }, [])
    if (loading) {
        return <h1>Cargando...</h1>
    }
       

return (
    <div>
        <h2 style={{textAlign:'center'}}>Detalles del producto</h2>
        <h1 style={{textAlign:'center'}}> 
        {product.img} 
        {product.name} 
        {product.price}</h1>
    </div>
)
}
 

 export default ItemDetailContainer