
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (

        <nav style={{display:'flex' , justifyContent:'space-between', backgroundColor:'gray' }}>
        
           <div>
                   <h1> E-Comerce</h1>
           </div> 

           <div>
                   <button> Accesorios </button>
                   <button> Camionetas </button>
                  < button> Autos </button>

           </div>
           <div style={{height:'10px' , width:'50px'}}>
             <CartWidget />
           </div>
        
        
         </nav>
    )
}

export default Navbar