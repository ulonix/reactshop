import React from 'react';

const CatalogoItem = () => {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="algo" />
            <h4>Nombre producto</h4>
            <p>Precio: $50.000</p>
            <button className="btn btn-danger">Ver producto</button>
        </div>
    )
}

export default CatalogoItem;