import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-6xl font-bold py-4">Please Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter your email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" className="input input-bordered" required/>
          <label className="label">
            
            <p><small>Don`t have an account <Link to="/register" className="label-text-alt link link-hover">Please Register?</Link></small></p>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
};

export default Login;