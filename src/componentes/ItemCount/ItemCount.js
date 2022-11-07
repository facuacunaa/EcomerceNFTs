import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({  stock = 0, initial = 1, onAdd, }) => {
    const [quantity ,SetQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            SetQuantity(quantity + 1 )

        }
    }
    const decrement = () => {
        if(quantity > 1 ){

        
        SetQuantity(quantity - 1)
        }
    }
    return (
        <div className="Counter">
            <div className="Controls">
            <button className="Button" onClick={decrement}>-</button>
            <h4 className='Numer'>{quantity}</h4>
            <button className="Button" onClick={increment}>+</button>       
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount