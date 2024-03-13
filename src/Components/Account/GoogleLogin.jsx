import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import AccountController from '../../ApiAccess/AccountController';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuth } from '../../Context/AuthContext';

export default function GoogleLoginPage() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const {auth,setAuth} = useAuth();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ;
    console.log(clientId);
    const onSuccess = async (response) => {
        const apiResponse = await AccountController.googleLogin(response.credential);
        if (apiResponse.statusCode === 200) {
            localStorage.setItem('token', apiResponse.data.accessToken);
            setAuth({
                IsAuthenticated: true,
                Roles: apiResponse.data.roles,
            });
            navigate('/home'); // Redirect to the home page after successful login
        } else {
            alert('Invalid credentials');
            navigate('/')
        }
    };

    const onFailure = (response) => {
        console.log('Login Failed:', response);
    };

    return (
        <div>
            <h1>Google Login</h1>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
}
