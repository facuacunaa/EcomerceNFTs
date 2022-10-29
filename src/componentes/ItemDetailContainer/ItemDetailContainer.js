import {useState, useEffect} from "react"
//import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../../services"


const ItemDetailContainer = ({setCart}) => {
 const [product, setProduct] =useState({})
 const [loading, setLoading] = useState(true)
       
 const { productId } = useParams()
 
   useEffect(() => {

      const docRef = doc(db , 'products', productId)


       getDoc(docRef).then(doc => {
        const data = doc.data()
    
       const productAdapted = { id: doc.id, ...data}

    
        setProduct(productAdapted)

       }).catch(error => {
        console.log(error)
       }).finally(() => {
        setLoading(false)
       }
       )

       // getProduct(productId).then(response => {
      //      setProduct(response)
      //  }).finally (() => {
       //     setLoading(false)
      //  })

       }, [])
    if (loading) {
        return <h1>Cargando...</h1>
    }
       

return (
    <>
        <ItemDetail {...product} setCart={setCart} />
         
    </>
)
}
 

 export default ItemDetailContainer