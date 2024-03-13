//add register component
import React, { useState } from 'react';
import { Link, useNavigate, useHistory } from 'react-router-dom';
import AccountController from '../../ApiAccess/AccountController';
import { useAuth } from '../../Context/AuthContext';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {auth,setAuth} = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiResponse = await AccountController.register(email, password, firstName, lastName);
        if (apiResponse.status === 200) {
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
}