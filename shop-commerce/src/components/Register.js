import React from 'react'
import { Link } from 'react-router-dom'

export default function Register(props) {

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
                  <form onSubmit={props.register}>
                    <div className='form-group'>
                        <center class="text-bold">
                            <h1>Register</h1>
                            <p className={msgClass.join(" ")}>{props.message}</p>
                        </center>

                      <label htmlFor="">
                        {" "}
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="please enter your name"
                        autoComplete='off'
                      />
                    </div>
                    <div className='form-group'>
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
                    <div className='form-group'>
                      <label htmlFor="">Confirm Password</label>
                      <input
                       type="password" 
                       name="confirmPassword"
                       className='form-control'
                       placeholder='Re-enter your password'
                    />
                    </div>
                    <button type="submit" className='btn btn-primary btn-block'>
                      Register
                    </button>
                    <br/>
                    <button class="btn btn-primary btn-block">Sign up with Google</button>
                  </form>
                  <center>
                    <p>If already registered, please <Link to="/login" onClick={props.switch}>Login</Link></p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
