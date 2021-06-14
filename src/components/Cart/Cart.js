import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
    list-style-type: none;
    padding: 0;

`
const Product = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 270px;
    max-width: 540px;
    border-radius: 8px;
    padding: 5px 10px;
    margin: 10px auto;
    background: #fff;
    color: #000;
    @media (max-width: 350px) {
        min-width: 220px;
        }
`

const Info = styled.p`
    margin-right: 10px;
    @media (max-width: 1150px) {
        width: 200px;
        }
    @media (max-width: 350px) {
        width: 120px;
        font-size: 14px;
        }
`

const ButtonBox = styled.div`
    
`

const Button = styled.button`
    margin: 0 0 0 5px;
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: none;
    cursor: ${props => props.theme.cursor};
    color: #fff;
    background: ${props => props.theme.bgc};
    trasition: all 0.3s ease;
    &:hover {
        opacity: ${props => props.theme.hover};
    }
`

const theme = {
    bgc: "grey", 
    hover: "1",
    cursor: "defualt"
  };
  
function Cart({cartItems, onAdd, onRemove}) {
    return (
        <Wrapper>
            {cartItems.map(product=> (
                <Product key={product.pid}>
                    <Info>Obecnie masz {product.quantity} sztuk {product.name}</Info>
                    {product.isBlocked  ? 
                    <ButtonBox>
                        <Button theme={ theme } disabled>+</Button>
                        <Button theme={ theme } disabled>-</Button>
                    </ButtonBox>
                    :                         
                    <ButtonBox>
                        <Button theme={ product.quantity === product.max ? { bgc: "grey", hover: "1" } : { bgc: "green", hover: "0.7", cursor: "pointer" } } onClick={()=>onAdd(product)}>+</Button>
                        <Button theme={ product.quantity === 0 ? { bgc: "grey", hover: "1" } : { bgc: "red", hover: "0.7", cursor: "pointer"  } } onClick={()=>onRemove(product)}>-</Button>
                    </ButtonBox>
                    }
                </Product>

            ))}
        </Wrapper>
    )
}

export default Cart
