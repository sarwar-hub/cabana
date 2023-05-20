import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user) {
        return children;
    } else {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
};

export default PrivateRout;