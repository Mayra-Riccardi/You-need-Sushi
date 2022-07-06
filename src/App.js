import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//en react hay que crear funciones que son los componentes
//ejemplo con funcion flecha. el llamado de la funcion va entre llaves, los simbolos de mayor y menos tambine tienen que estar porq en react las funcinones no pueden tomar mas de un elemento

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola soy ItemListContainer y pronto seré catálogo!!!"/>
      <ItemListContainer greeting="Segundo texto para probar si esto está bien."/>
      <ItemListContainer greeting="Tercer y último texto."/>

    </div>
  );
}

export default App;

//en react se usan llaves para llamar a la funcion
//Cuando un componente (funcion) necesita parametros (propiedades props) para funcionar, este componente debe presentarse como un objeto