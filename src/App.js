import React from "react";
import { 
  BrowserRouter as Router,
  
} from 'react-router-dom'
import ItemListContainer from "./component/itemsContet/ItemListContainer";
import Navbar from './component/Navbar'


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
