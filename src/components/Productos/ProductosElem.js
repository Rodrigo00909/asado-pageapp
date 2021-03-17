import styled from 'styled-components';

export const ProductosContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background-color: #150f0f;
    color: #fff;
`;

export const ProductosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;   

export const ProductoCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ProductoImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #3e3535;
`;

export const ProductosH = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ProductoTitulo = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProductoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductoDescripcion = styled.p`
    margin-bottom: 1rem;
`;

export const ProductoPrecio = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProductoBoton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: rgb(215 221 228);
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;
