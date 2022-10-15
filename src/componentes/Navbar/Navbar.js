
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (

        <nav className="NavBar" style={{display:'flex' , justifyContent:'space-between', backgroundColor:'gray', border:'solid'}}>
        
           <div className='NavBar'>
            <Link to= '/'>
                   <h1> E-Comerce</h1>
            </Link>
           </div> 

           <div className="categories" style={{textDecoration:'none' }}>
                   <Link to='/category/Accesorios'  classname="option"> Accesorios </Link>
                   <Link to='/category/Camionetas' className="option"> Camionetas </Link>
                  <Link to='/category/Autos' className="option"> Autos </Link> 
          </div>

           
           <div style={{height:'10px' , width:'50px'}}>
             <CartWidget />
           </div>
        
        
         </nav>
    )
}

export default Navbar