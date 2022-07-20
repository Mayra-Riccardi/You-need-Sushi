import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
//en react hay que crear funciones que son los componentes

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Cuando un componente (funcion) necesita parametros (propiedades props) para funcionar, este componente debe presentarse como un objeto