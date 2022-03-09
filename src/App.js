import React from "react";
import { 
  BrowserRouter as Router,
  
} from 'react-router-dom'
import ItemListContainer from "./component/itemsContet/ItemListContainer";
import Navbar from './component/Navbar'
//import Tendencias from './component/paginas/Tendencias'
//import Promociones from './component/paginas/Promociones'
//import Inicio from './component/paginas/Inicio'
function App() {


  return (
    <div className="App">
     
     <Router>
       <Navbar/>
     </Router>
     <ItemListContainer persona="Hola Laura!"/>
    </div>
  );
}

export default App;
