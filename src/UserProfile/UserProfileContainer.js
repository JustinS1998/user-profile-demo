import React, { useState, useEffect } from 'react';
import { UserProfile } from './UserProfile';

export function UserProfileContainer(props) {
    const [user, setUser] = useState(null);

    const getRandomUser = async () => {
        const url = 'https://randomuser.me/api';
        try {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            return jsonResponse.results[0];
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    useEffect(() => {
        console.log('page loaded');
        getRandomUser().then((newUser) => { setUser(newUser) });
    }, []);

    return (
        <>
            {(user !== null) ? <UserProfile user={user}></UserProfile> : <p>Loading</p>}
        </>
    );
}