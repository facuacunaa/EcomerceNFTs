
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (

        <nav style={{display:'flex' , justifyContent:'space-evenly'  }}>
        
           <div>
                   <h1> E-Comerce</h1>
           </div> 

           <div>
                   <button> Mas vendidos</button>
                   <button> Vende tus NFTs </button>
                  < button> Mis NFTs </button>

           </div>
           <div style={{height:'10px' , width:'10px'}}>
             <CartWidget />
           </div>
        
        
         </nav>
    )
}

export default Navbar