  import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getProductsByCategory } from "../../asyncMock"
  
  const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] =useState(false)
    const [loading, setLoading] =useState(true)
  
    const {categoryId } = useParams()
   
    useEffect (() => {
      if (!categoryId){
      getProducts().then(products => {
        setProducts(products)
        
        }).catch(error=> {
          console.log(error)
          setError(true)
          
        }).finally (() => {
          setLoading(false)
        })
      } else {
        getProductsByCategory(categoryId).then(res =>{
          setProducts(res)
      }).catch(error => {
        console.log(error)
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
      }
      
     } ,[categoryId])

     if (loading) {
      return <h1 style={{textAlign:'center'}}>Cargando...</h1>
  }
  // const productosTransformados = products.map( product=> <li>{product.name}</li>)



   
   
    return (

      <div className="ItemListConteiner">
      <h1 style={{textAlign:'center'}}>Nuestros productos</h1>
      <div style={{display:'flex', flexDirection:'row',  justifyContent:'space-around'}}>
        {products.map(prod =>(
          <div key={prod.id}>
            <h1>{prod.name}</h1>
            <Link to={`/detail/${prod.id}`} style={{}}>ver Detalle</Link>
            </div>
        ))
  }
      </div>
   
      </div>

    )


  }
  
  export default ItemListContainer