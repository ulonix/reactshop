import React from 'react';


const CatalogoItem = (props) => {
    return (
        <div className="row">
            <div className="col-md-2 mt-1">
                <img src={props.productoImg} className="img-thumbnail" alt="algo" />
            </div>   
            <div className="col-md-10">
                <h4>{props.productName}</h4>
                <p>Precio: {props.productPrice} </p>
                
                <button className="btn btn-danger">Ver producto </button>
                {props.children}
            </div>     
        </div>
    )
}

export default CatalogoItem;