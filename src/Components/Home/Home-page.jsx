//add home page
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    
    return (
        <div>
            <h1>Home</h1>

            <div className="flex">
                <Link to= "/MyOrders">My Orders</Link>
                <br/>
                <Link to= "/Users">Users</Link>
            </div>
        </div>
    );
}