//add users component
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import UserController from '../../ApiAccess/UserController';

export default function Users() {
    const { auth } = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await UserController.getUsers(auth?.UserId);
            setUsers(data);
        };
        fetchData();
    }, [auth?.UserId]);
    return (
        <div>
            <h1>Users</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        {user.username}
                    </div>
                ))}
            </div>
        </div>
    );
}