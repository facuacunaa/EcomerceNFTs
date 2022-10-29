
import './Navbar.css'
import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import  {getDocs, collection } from 'firebase/firestore'
import { db } from '../../services'




const Navbar = () => {

  const[categories, setCategories] = useState([])

  useEffect(() => {
   const collectionRef= collection(db,'categories')

    getDocs(collectionRef).then(response => {
      console.log(response)

     const categoriesAdapted = response.docs.map(doc =>{
      const data = doc.data()
    
      return { id: doc.id, ...data}

     })
    setCategories(categoriesAdapted)
    })
}, [])
console.log(categories)



    return (

        <nav className="NavBar" style={{display:'flex' , justifyContent:'space-between', backgroundColor:'gray', border:'solid'}}>
        
           <div className='NavBar'>
            <Link to= '/'>
                   <h1> E-Comerce</h1>
            </Link>
           </div> 

           <div className="Categories" style={{textDecoration:'none' }}>
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