import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';

const Register = () => {

  const {createUser, loginWithGoogle}= useContext(AuthContext);
  console.log('create User', createUser)

  
  const handleRegister = event=>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password)

    createUser(email, password)
    .then((result) =>{
      const user = result.user;
      console.log('create', user);
      form.reset();
    })
    .catch((error)=>{
      console.error(error);
    })

  }

  const handleToLogGoogle=()=>{
    loginWithGoogle()
    .then(result=>{
      const user = result.user;
      console.log('google', user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-6xl font-bold py-4">Please Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required/>
        </div>
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
            
            <p><small>have an account <Link to="/login" className="label-text-alt link link-hover">Please Login!</Link></small></p>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      
      <button onClick={handleToLogGoogle} className="btn btn-block bg-emerald-600">Login With Google</button>
      
    </div>
  </div>

        </div>
    );
};

export default Register;