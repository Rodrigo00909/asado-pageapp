import React from 'react';
import {
    ProductosContainer, 
    ProductosH, 
    ProductosWrapper, 
    ProductoCard, 
    ProductoImg, 
    ProductoInfo, 
    ProductoTitulo, 
    ProductoDescripcion, 
    ProductoPrecio, 
    ProductoBoton
} from './ProductosElem';

const Productos = ({header, data}) => {
    return (
        <ProductosContainer>
            <ProductosH>{header}</ProductosH>
            <ProductosWrapper>
                {data.map( (producto, i) => {
                    return (
                        <ProductoCard key={i}>
                            <ProductoImg src={producto.img} alt={producto.alt} />
                            <ProductoInfo>
                                <ProductoTitulo>{producto.name}</ProductoTitulo>
                                <ProductoDescripcion>{producto.desc}</ProductoDescripcion>
                                <ProductoPrecio>{producto.price}</ProductoPrecio>
                                <ProductoBoton>{producto.button}</ProductoBoton>
                            </ProductoInfo>
                        </ProductoCard>
                    )
                })}
            </ProductosWrapper>
        </ProductosContainer>
    )
}

export default Productos;
