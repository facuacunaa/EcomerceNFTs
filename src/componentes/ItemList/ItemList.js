 const ItemList = ({products}) => {
       
    return(
        <ul>
            { products.map( product=> <li>key={product.name}</li>)}
        </ul>
    )
 }

 export default ItemList