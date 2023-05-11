import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';

const Login = () => {
  const {loginUser,} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/.';

  const handleLogin = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    loginUser(email, password)
    .then((result)=>{
      const user = result.user;
      form.reset();
      navigate(from, {replace: true});
      console.log('Login',user)
    })
    .catch((error)=>{
      console.error(error)
    })

  }

  

    return (
        
            <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-6xl font-bold py-4">Please Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required/>
          <label className="label">
            
            <p><small>Don`t have an account <Link to="/register" className="label-text-alt link link-hover">Please Register?</Link></small></p>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
    </div>
  </div>

        </div>
    );
};

export default Login;