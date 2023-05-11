import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext/UserContext';
import {Navigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p> Loading.....</p>
    }
    if(user && user.uid){
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivateRoutes;