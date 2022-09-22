import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';


function App() {
  return (
    <div>
       <Navbar/>
       <ItemListContainer greeting={'Bienvenidos'}/>
      
      
    </div>
  );
}

export default App;
