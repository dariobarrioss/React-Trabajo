import React from "react";
import { 
  BrowserRouter as Router,
  
} from 'react-router-dom'
import Navbar from './component/Navbar'
//import Tendencias from './component/paginas/Tendencias'
//import Promociones from './component/paginas/Promociones'
//import Inicio from './component/paginas/Inicio'
function App() {


  return (
    <div className="App">
     
     <Router>
       <Navbar/>
         <h1 className="mx-auto">Moda</h1>
     </Router>
    </div>
  );
}

export default App;
