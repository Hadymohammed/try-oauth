//build login form
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountController from '../../ApiAccess/AccountController';
import { useAuth } from '../../Context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {auth,setAuth} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiResponse = await AccountController.login(email,password);
        console.log(apiResponse);
        if (apiResponse.statusCode === 200) {
            localStorage.setItem('token', apiResponse.data.accessToken);
            setAuth({
                IsAuthenticated: true,
                Roles: apiResponse.data.roles,
            });
            navigate('/home')
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <Link to="/register">Don't have an account?</Link>
        </div>
    );
}