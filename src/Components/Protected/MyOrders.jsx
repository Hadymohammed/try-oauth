//add my orders component
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import OrderController from '../../ApiAccess/OrderController';
import { Link } from 'react-router-dom';

export default function MyOrders() {
    const { auth } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await OrderController.getOrders(auth?.UserId);
            setOrders(data);
        };
        fetchData();
    }, [auth?.UserId]);
    return (
        <div>
            <h1>My Orders</h1>
            <div>
                {orders.map((order) => (
                    <div key={order.id}>
                        <Link to={`/order/${order.id}`}>{order.id}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}