  import { useEffect, useState, useContext } from "react"
import { Link, useParams } from "react-router-dom"
//import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../services"
import {NotificationContext} from '../notification/notification'

//import { getProducts, getProductsByCategory } from "../../asyncMock"
  
  const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)
  
   const {setNotification} = useContext(NotificationContext)

    const {categoryId } = useParams()


    useEffect (() => {
      setLoading(true)

     // const asyncFunction = categoryId ? getProductsByCategory : getProducts
    const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId ))
    : collection(db, 'products')
    
    //collection(db, 'products')

    getDocs(collectionRef).then(response => {
      console.log(response)

      const productsAdapted= response.docs.map(doc => {
        const data = doc.data()
        console.log(data)
       return { id: doc.id, ...data}
      })
     
     setProducts (productsAdapted)
    })
    .catch(error => {
      setNotification('error', 'No se pueden obtener los productos')

    })
    
    . finally(() => {
      setLoading(false)
    }
    )
   
  //  asyncFunction (categoryId) .then(response=> {
     //   setProducts(products)
      //  }).catch(error=> {
      //    console.log(error)
          
      //  }).finally (() => {
      //    setLoading(false)
      //  })
      }, [categoryId])

     if (loading && true) {
      return <h1 style={{textAlign:'center'}}>Cargando productos...</h1>
  }

      
    return (

      <div className="ItemListConteiner">
      <h1 className="tituloprod">NUESTROS PRODUCTOS</h1>
      <div className="cartdiv">
        {products.map(prod =>(
          <div key={prod.id}>
            <h1 className="titulo">{prod.name}</h1>
          <div>  <img src={prod.img} className="ItemImg"/></div>
            
            <Link className="linkdetalles" to={`/detail/${prod.id}`}>Ver detalles</Link>
            
            </div>
        ))
  }
      </div>
   
      </div>

    )


  }
  
  export default ItemListContainer