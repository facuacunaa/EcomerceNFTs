import { useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';
import Counter from './componentes/Counter/Counter';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ItemList from './componentes/ItemList/ItemList';
import { getProduct } from './asyncMock';
import Item from './componentes/Item/Item';
import { CartContextProvider } from '../src/componentes/context/CartContext';
import { NotificationProvider } from './componentes/notification/notification';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/checkout/checkout';


function App () {
  


  return (

    <div className='app'>
      <NotificationProvider>
      <CartContextProvider>
      
       
       <BrowserRouter>
       <Navbar/>
       
     {/*  <div>
          <Link to='/'>Listado</Link>
          <Link to='/detail'>Detalle</Link>
  </div>*/}

       <Routes>
         <Route path='/' element= {<ItemListContainer />} />
         <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
         <Route path='/detail/:productId' element ={<ItemDetailContainer />} />
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/checkout' element={<Checkout />} />
         <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         
         
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </NotificationProvider>
    </div>


    
  );
}

export default App;
