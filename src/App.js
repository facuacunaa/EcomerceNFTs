import { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';
import Counter from './componentes/Counter/Counter';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom'



function App() {

  const handleOnAdd = () => console.log ('agregar al carrito')


  return (
    <div className='app'>
      
       <Navbar/>
      <h1> <ItemListContainer greeting={'Compra tus productos'}/></h1 >
      <ItemDetailContainer/>
        
        <section>
       {/*<Counter initial= {0} stock={10} onAdd={handleOnAdd}/>*/}
       </section>
    </div>


    
  );
}

export default App;
