import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  let msgClass = ["text-center"]
  if (props.type){
    msgClass.push("text-success")
  }else{
    msgClass.push("text-danger")
  }
  return (
    <div className='container-fluid'>
          <div className='col-md-5 m-auto'>
            <div className="mt-3">
              <div className='card text-left'>
                <div className='card-body'>
                  <form onSubmit={props.login}>
                    <center class="text-bold"><h1>login</h1></center>
                    <div className='form-group'>
                    <p className={msgClass.join(" ")}>{props.message}</p>
                      <label htmlFor="">Email</label>
                      <input
                       type="email" 
                       name="email"
                       className='form-control'
                       placeholder='enter your email-id'
                    />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="">Password</label>
                      <input
                       type="password" 
                       name="password"
                       className='form-control'
                       placeholder='enter your password'
                    />
                    </div>
                    <button type="submit" className='btn btn-primary'>
                      Login
                    </button>
                  </form>
                  <center>
                    <p>If new user, please <Link to="/register" onClick={props.switch}>Register</Link></p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  )
}


