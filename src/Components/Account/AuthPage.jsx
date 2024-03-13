// add page contains links to login, register, google-register, and google-login
import {React} from "react";
import {Link} from "react-router-dom";

export default function AuthPage() {
    return (
        <div>
            <h1>Home</h1>
            <div className="flex">
                <Link to="/login">Login</Link>
                <br/>
                <Link to="/register">Register</Link>
                <br/>
                <Link to="/google-login">Login with Google</Link>
            </div>
        </div>
    );
}

