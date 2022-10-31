import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth} from 'firebase/app';


const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;