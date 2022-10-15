import { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';
import Counter from './componentes/Counter/Counter';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ItemList from './componentes/ItemList/ItemList';





function App() {

  


  return (
    <div className='app'>
      
       
       <BrowserRouter>
       <Navbar/>
       <h1>Bienvenidos</h1>
     {/*  <div>
          <Link to='/'>Listado</Link>
          <Link to='/detail'>Detalle</Link>
  </div>*/}

       <Routes>
         <Route path='/' element= {<ItemListContainer />} />
         <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
         <Route path='/detail/:productId' element ={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
       
    </div>


    
  );
}

export default App;
