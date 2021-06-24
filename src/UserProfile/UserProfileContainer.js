import React, { useState, useEffect } from 'react';
import { UserProfile } from './UserProfile';

export function UserProfileContainer(props) {
    const [user, setUser] = useState(null);
    const getRandomUser = async () => {
        const url = 'https://randomuser.me/api';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        return jsonResponse.results[0];
    }

    useEffect(() => {
        getRandomUser().then((newUser) => { setUser(newUser) })
        .catch((error) => console.error(error));
    }, []);

    return (
        <>
            {(user) ? <UserProfile user={user}></UserProfile> : <p>Loading</p>}
        </>
    );
}