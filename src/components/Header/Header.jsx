import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log('hasan', user)

  const submitToLogOut =()=>{
    logOut()
    .then(()=>{

    })
    .catch((error)=>{
      console.error(error)
    })
  }
  
  return (
    <div>
      
      <div className="navbar bg-neutral text-neutral-content ">
        
        <Link to="/" className="btn btn-ghost normal-case text-3xl">Toyo-Inn</Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to="/booking" className="btn btn-ghost normal-case text-xl">Booking</Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
        {user?.email && <span>welcome {user.email}</span>}
        {user?.email ? 
        
        <button onClick={submitToLogOut} className="btn btn-outline btn-info">
          Log out
        </button>
          : 
      <Link to="/login">
          <button className="btn btn-outline">Login</button>
      </Link>
          }
        
        
      </div>
      
    </div>
  );
};

export default Header;
