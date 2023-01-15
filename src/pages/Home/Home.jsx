import React from 'react'
import { useSelector } from 'react-redux'

import NavBarre from '../../component/NavBarre'
import Product from '../../component/Product'

import "./Home.css"

const Home = () => {
  const state= useSelector(state=>state.basket)
  const user= state[0].user
  const product = state[0].productSearch? state[0].productSearch: state[0].product
  return (
    <div>
        <NavBarre
            id={user.id}
            name={user.name}
            present={user.present}
        />

        <div className="products">
        {product.map(({...product})=>{
                    return(<Product 
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      rating={product.rating}
                    />)})}
        </div>
    </div>
  )
}

export default Home