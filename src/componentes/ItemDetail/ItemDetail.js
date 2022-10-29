import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { NotificationContext } from "../notification/notification"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'





const ItemDetail = ({id, name, img, categoria, descripcion, price, stock, }) => {
    
    const [quantityToAdd, SetQuantityToAdd] = useState(0)
    
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        SetQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('sucess',`Se agrego correctamente ${quantity} ${name}`)
        
    }
  const productAddedQuantity = getProductQuantity(id)
    
    return (
        <article className ="CardItem">
        <hearder className= "Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </hearder>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>   
        <section>
            <p className="Info">
                categoria:{categoria}
            </p>
            <p className="Info">
                descripcion: {descripcion}
            </p>
            <p className="Info">
                Precio: {price}
            </p>
            </section>
            <footer className='ItemFooter' >
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                    ) :( 
                        <Link to='/cart' className="Option">Finalizar compra</Link>
                    )
                    
                }
                </footer>   
            </article>         
            )
            }
            const Count = ({onAdd}) => {
                const[count, setCount] = useState(0)

                return(
                    <button onClick={() => onAdd(count)}>Agregar al carrito</button>
                )
            }

            export default ItemDetail

            