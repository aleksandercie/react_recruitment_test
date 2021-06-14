import React from 'react';
import Product from '../Product/Product';
import styled from 'styled-components';

const Wrapper = styled.ul`
    margin: 20px;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
`

function Main({products}) {
    return (
        <Wrapper>
            {products.map(product=> (
                <Product key={product.pid} product={product} />
            ))}
        </Wrapper>
    )
}

export default Main
