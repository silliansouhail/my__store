import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSignIn } from '../../redux/shoppingSlice'
import { Link } from 'react-router-dom'

import Trend1 from '../../asset/image/Trend.jpg'
import Trend2 from '../../asset/image/Sale2.webp'

import './SignIN.css'

const SignIN = () => {
    //set the list of users
    const state= useSelector(state=>state.basket)
    const users= state[0].users

    //change the trend in the site
    const [trend, setTrend] = useState(Trend2)
    useEffect(() => {
    const interval=setInterval(() => {
        if (trend===Trend2) {
            setTrend(Trend1)
        } else {
            setTrend(Trend2)
        }
    }, 5000);
    return () => {
        clearInterval(interval)
    }
    }, [trend])
    
    //form setting
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    //user verification 
    const findUser=(na,pw)=>{
        let p={}
        let pr=[]
        for (let i = 0; i < users.length; i++) {
            if (na===users[i].name&&pw===users[i].password){
                pr =users[i]
                p={id:pr.id,name:pr.name,password:pr.password,present:true}
            }
        }
        return p
    }
    const present=findUser(name,password);
    const pr=present.present
    //change the user status 'present' from false to true

    const dispatch=useDispatch()
    const signIn = e => {
        e.preventDefault();
        dispatch(userSignIn({id:present.id,present:present.present}))
    }

return (
    <div className="container">
        <div className='box'>
            <div className="form">
                <h2>Sign In</h2>
                <form>
                    <div className="inputBox" >
                        <input type="text" required="required" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <span>UserName</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <span>password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="./">Forgot Password</a>
                        <Link to='/register'>SignUp</Link>
                    </div>
                    {pr&&<button onClick={signIn}>LogIn</button>}
                </form>
            </div>
        </div>
        <div className="banner">
            <img src={trend} alt="trend" />
        </div>
    </div>
  )
}

export default SignIN