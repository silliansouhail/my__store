import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket,} from '../redux/shoppingSlice'

import './Product.css'

const Product = ({id,title,price,image,rating}) => {

    const dispatch=useDispatch()

    const productToAdd ={id:Date.now(),type:id, title:title, price:price ,image:image}
    //add to basket action
    const add_toBasket =()=>{
        dispatch(addToBasket(productToAdd))
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
        <button className='product__btn' onClick={add_toBasket} >
            Add To Basket
        </button>
    </div>
  )
}

export default Product