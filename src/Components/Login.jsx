import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';

const Login = () => {

    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider;
    
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error, error.message);
        })
    }

    return (
        <div>
           <button onClick={handleGoogleSignIn} className='px-4 py-2 rounded bg-purple-100 text-slate-300'>Google Login</button> 
        </div>
    );
};

export default Login;