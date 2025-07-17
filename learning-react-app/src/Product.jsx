import "./Product.css"

function Product({tittle,price ,features}){
    // const list = features.map((feature) => <li>{feature}</li>)
    
    return(
        <div className="Product">
            <h3 >{tittle}</h3>
            <h5>Price: {price}</h5>
            {price>25000 && <p>Discount of 5% </p> }
            {/* <p>{list}</p> */}
        </div>
    );
}

export default Product;