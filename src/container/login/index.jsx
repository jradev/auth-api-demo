import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './style.css';

export default function(){
    return (
        <div className='main'>
            <h2>Authentication</h2>
            <div>
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />
            </div>
        </div>
    );
}