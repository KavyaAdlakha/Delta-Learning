import "./Product.css"

function Product({tittle,price ,features}){
    // const list = features.map((feature) => <li>{feature}</li>)
    let isDiscount = price>30000;
    let styles = {backgroundColor: isDiscount? "aqua": "", color: isDiscount? "black":""};
    return(
        <div className="Product" style={styles}>
            <h3 >{tittle}</h3>
            <h5>Price: {price}</h5>
            {isDiscount && <p>Discount of 5% </p> }
            {/* <p>{list}</p> */}
        </div>
    );
}

export default Product;