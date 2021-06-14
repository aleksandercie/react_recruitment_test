import React, { useState } from 'react';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import data from '../../../api/cart.json';
import styled from 'styled-components';
import GlobalStyle from '../../theme/globalStyle';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 740px) {
    flex-direction: column;
    }
`
const ProductsBox = styled.div`

`

const Total = styled.h3`
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  padding: 10px;
  margin: 25px 20px;
  min-width: 270px;
  text-align: center;
  background: #fff;
  color: #0fab07;
  span {
    display: block;
    margin-top: 5px;
    font-weight: 600;
  }
  @media (max-width: 350px) {
    font-size: 15px;
    min-width: 220px;
    }
`

const App = () => {

  const products = data;
  const [cartItems, setCartItems] = useState(products);
  const [total, setTotal] = useState(0.00);
  
  const countTotal = () => {
    let sum = 0;
    cartItems.map((x) => sum += x.quantity * Number(x.price));
    setTotal(sum.toFixed(2));
  }
  const onAdd = (product) => {
    cartItems.map((x) => x.pid === product.pid && (x.quantity < x.max && (x.quantity += 1)));
    setCartItems([...cartItems], cartItems);
    countTotal();
  }
  const onRemove = (product) => {
    cartItems.map((x) => x.pid === product.pid && (x.quantity >= x.min && (x.quantity -= 1)));
    setCartItems([...cartItems], cartItems);
    countTotal();
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ProductsBox>
          <Main products={products}/>
          <Total>Suma Twojego zamówienia: {parseFloat(total) === 0.00 ? <span>0</span> : <span>{total} zł</span>}</Total>
        </ProductsBox>
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </Wrapper>
    </>
  );
};

export {
    App
};
