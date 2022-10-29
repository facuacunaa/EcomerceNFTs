import cart from './Assets/carrito.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'





    const CartWidget = () => {

        const {totalQuatity } = useContext(CartContext)

        return (
        <Link to='cart' className='CartWidget'>
            <img src={cart} alt='cart' className='CartImg'/>
            
            {totalQuatity}
       
        </Link>
        )
    }
    export default CartWidget