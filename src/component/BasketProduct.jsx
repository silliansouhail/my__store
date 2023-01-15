import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../redux/shoppingSlice'

import './BasketProduct.css'

const BasketProduct = ({id,title,price,image,rating}) => {
    const dispatch=useDispatch()

    //remove from basket action
    const remove_fromBasket =()=>{
        const productToRemove={id:id,title:title,price:price,image:image,rating:rating}
    dispatch(removeFromBasket(productToRemove))
    }
return (
        <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>£</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
                {Array(rating).fill().map((_i)=>(
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img className='product__img' src={image} alt="The Lean Startup" />
        <button className='product__btn' onClick={remove_fromBasket} >
            Remove
        </button>
    </div>
  )
}

export default BasketProduct