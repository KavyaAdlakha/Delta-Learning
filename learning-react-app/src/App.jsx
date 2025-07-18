import "./App.css";
import Tittle from "./Tittle.jsx"
import Product from "./Product.jsx" 
import ProductTab from "./ProductTab.jsx"
import Msgbox  from "./Msgbox.jsx";



function App() {
  return(
    <>
    <ProductTab/>
    <Msgbox username="Kaavyy" textColor="aqua"/>
    <Msgbox username="Kaavyy" textColor="yellow"/>
    <Msgbox username="Kaavyy" textColor="pink "/>
    
    </> 
    );
}

export default App
