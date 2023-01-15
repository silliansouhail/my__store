import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../../redux/shoppingSlice'

import './Register.css'

const Register = () => {
  //form settings
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conformedPassword, setConformedPassword] = useState('')

  //user list

  const state= useSelector(state=>state.basket)
    const users= state[0].users
    console.log(users)
    //check if the user email is already existing
    const findEmail=(users)=>{
      return users.email===email
    }
    const userFond= users.find(findEmail)? true:false
    console.log(userFond);

  const fillForm=(fe)=>{
    let n= name? true: false 
    let e = email? true: false
    let p= password? true: false
    let cp
    if (password===conformedPassword) {
        cp=true 
    }
    let f=n&&e&&p&&cp&&!fe
    return f  
  }
  const pr=fillForm(userFond)

  //dispatch the user registration
  const dispatch= useDispatch()
  const registration= (e)=>{
    e.preventDefault();
    dispatch(registerUser({
      id:Date.now(),
      name:name,
      email:email,
      password:password,
      present:false,
    }))
  }
  return (
    <div className='register__container'>
        <div className="form__container">
          <div className="form__box">
            <h2>Register Form</h2>
            <form>

              <div className="formInputBox">
                <input type="text" required="required"value={name} onChange={(e)=>setName(e.target.value)} />
                <span>User name</span>
                <i></i>
              </div>

              <div className="formInputBox">
                {userFond&&<label>This Email is already in use</label>}
                <input type="text" required="required"value={email} onChange={(e)=>setEmail(e.target.value)} />
                <span>User email</span>
                <i></i>
              </div>

              <div className="formInputBox">
                <input type="password" required="required"value={password} onChange={(e)=>setPassword(e.target.value)} />
                <span>User password</span>
                <i></i>
              </div>

              <div className="formInputBox">
                <input type="password" required="required"value={conformedPassword} onChange={(e)=>setConformedPassword(e.target.value)} />
                <span>Conformed User password</span>
                <i></i>
              </div>
              {pr&&<button onClick={registration} className='formSubmit'>
                <Link to="/" className='a'>
                  Register Now
                </Link>
              </button>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register