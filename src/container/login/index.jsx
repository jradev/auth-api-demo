import React from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import './style.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function(){

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['tokens']);

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            setCookie('tokens', JSON.stringify(codeResponse), { path: '/' });
            navigate('/home');
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <div className='main'>
            <h2>Authentication</h2>
            <button onClick={googleLogin}>
                <p>Google Login</p>
            </button>
        </div>
    );
}