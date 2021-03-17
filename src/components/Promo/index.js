import React from 'react'
import {PromoContainer, PromoBoton} from './PromoElem';

const Promo = () => {
    return (
        <PromoContainer>
            <h1>¿Querés probar el Café del día?</h1>
            <p>Café Macchiato: es parecido al Café Espumoso pero rebajado con agua</p>
            <PromoBoton>Pedir Ahora</PromoBoton>
        </PromoContainer>
    )
}

export default Promo;
