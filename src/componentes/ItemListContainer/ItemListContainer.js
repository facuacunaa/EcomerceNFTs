  import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
  
  const ItemListContainer = ({greeting}) => {
    const [products,setProducts] = useState([])
   
    useEffect (() => {
      getProducts().then(res => {
        setProducts(res)
        
        }).catch(error=> {
          console.log(error)
          
        })
      }  ,[])

    
   const productosTransformados = products.map( product=> <li>{product.name}</li>)

   
   
    return (

      <div className="ItemListConteiner">
      <h1 style={{align:'center'}}>{greeting}</h1>
      <ul>
        <ItemList products={products}/>
    </ul>
      </div>

    )


  }
  export default ItemListContainer