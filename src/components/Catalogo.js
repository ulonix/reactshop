import React from 'react';
import CatalogoItem from './CatalogoItem';
import faker from 'faker';
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