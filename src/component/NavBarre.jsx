import React, { useEffect, useState } from 'react'

import {BiSearchAlt} from 'react-icons/bi'
import {SlBasket} from 'react-icons/sl'
import { useDispatch, useSelector,} from 'react-redux'
import { searchProduct, userSignOut } from '../redux/shoppingSlice'

import './NavBarre.css'
import Logo from'../asset/image/online-store.webp'
import { Link } from 'react-router-dom'

const NavBarre = ({id,name,present}) => {

    const state= useSelector(state=>state.basket)
    const basket= state[0].basket
    let bl = basket? basket.length : 0

    const [searchProducts, setSearchProducts] = useState('')
    console.log('1=',searchProducts);

    const dispatch=useDispatch()

    const signOut=()=>{
        dispatch(userSignOut())
    }


    {/*const searchInput = (e)=>{
        let sh= e.target.value?e.target.value: null
        setSearchProducts(sh)
        dispatch(searchProduct(searchProducts))
    }*/}
    
    const searchBtn = () => {
            dispatch(searchProduct(searchProducts))
            console.log('2=', searchProducts);
        }
    
return (
    <nav>
        <Link to='/' >
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
        </Link>
        
        <div className="search">
            <input type="text" onChange={(e)=>setSearchProducts(e.target.value)}/>
            <button onClick={searchBtn}>
                <BiSearchAlt/>
            </button>
        </div>
        <ul>
            <li>
                <div>
                    <span><small>Hallo {present? name :'Guest'}</small></span>
                    <span className='out' onClick={signOut}>{present? 'Sign Out':'Sign In'}</span> 
                </div>
            </li>
            <li>
                <div>
                    <span><small className='items__number'>{bl}</small></span>
                    <Link to='/basket' ><SlBasket className='basket'/></Link> 
                </div>
            </li>
        </ul>
    </nav>
)
}

export default NavBarre