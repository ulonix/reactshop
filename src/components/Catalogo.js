import React from 'react';
import faker from 'faker';
import CatalogoItem from './CatalogoItem';
import Wishlist from './Wishlist';

const Catalogo = () => {
    return (
        <div className="container">
            <CatalogoItem
                productName="Producto 1" 
                productPrice="50.000" 
                productoImg={faker.image.cats()}>
                <Wishlist />
            </CatalogoItem>    
        </div>
    )
}

export default Catalogo;