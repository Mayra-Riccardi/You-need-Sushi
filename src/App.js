import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/cart/' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

