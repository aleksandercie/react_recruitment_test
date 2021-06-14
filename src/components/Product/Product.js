import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 270px;
    border-radius: 8px;
    padding: 5px 10px;
    margin: 10px auto;
    background: #fff;
    color: #000;
    @media (max-width: 350px) {
        min-width: 220px;
        }
`

const Name = styled.h2`
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
    @media (max-width: 350px) {
        font-size: 14px;
        max-width: 120px;
        }

`

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #0fab07;
    @media (max-width: 350px) {
        font-size: 14px;
        }
`

function Product({product}) {
    return (
        <Wrapper>
            <Name>{product.name}</Name> 
            <Price>{product.price.replace('.', ',')} zł</Price>
        </Wrapper>
    )
}

export default Product
