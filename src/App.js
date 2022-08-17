import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer';
import "./styles/Root.css";


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/item/:id' element={<ItemDetail/>}/>
        <Route path='/cart/' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </CartContextProvider>
    
  );
}

export default App;

