import React, { useState, useEffect } from 'react';
import { UserInfo } from './UserInfo';

export function UserInfoContainer(props) {
    const [user, setUser] = useState({
        name: {
            first: '',
            last: ''
        }
    });

    const getRandomUser = async () => {
        const url = 'https://randomuser.me/api';
        try {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            return jsonResponse.results[0];
        } catch (e) {
            console.error(e);
            return {
                name: {
                    first:'',
                    last:''
                }
            };
        }
    }

    useEffect(() => {
        console.log('page loaded');
        getRandomUser().then((newUser) => {setUser(newUser)});
    }, []);

    return (
        <UserInfo 
        user={user}
        ></UserInfo>
    );
}