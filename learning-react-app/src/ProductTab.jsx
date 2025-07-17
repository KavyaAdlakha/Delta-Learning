import Product from "./Product.jsx"

function ProductTab(){
   let options = ["hi-tech","durable","fast"];
   // let options2 = {a:"Hi-tech",b:"Durable",c:"Fast"}
   return (
    <>
     <Product tittle="phone" price={30000} features={options} />
     <Product tittle="laptop" price={55000} features={options}/>
     <Product tittle="pen" price={15} features={options}/>
    </> 
   );
}

export default ProductTab;