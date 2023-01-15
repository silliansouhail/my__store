import React from 'react'

import { useSelector } from 'react-redux'
import BasketProduct from '../../component/BasketProduct'
import NavBarre from '../../component/NavBarre'


import './Basket.css'

const Basket = () => {
    const state= useSelector(state=>state.basket)
    const basket = state[0].basket

    //price of the basket
    const price = ()=>{
        let p= 0
        for (let i = 0; i < basket.length; i++) {
            p = p+ basket[i].price;
        }return p
    }
    const p = price()? price():0
  return (
    <div>
        <NavBarre/>
        <div className="basket__product">
            <div className="basket__price">
            <p> You'r Total Price is {p} £</p>
            </div>
            <div className="product__toCheckOut">
                {basket.map(({...basket})=>{
                            return(<BasketProduct 
                            id={basket.id}
                            title={basket.title}
                            image={basket.image}
                            price={basket.price}
                            rating={basket.rating}
                />)})}
            </div>
            
        </div>
    </div>
  )
}

export default Basket