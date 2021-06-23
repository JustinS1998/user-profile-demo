import React, { useState, useEffect } from 'react';
import { UserInfoCard } from './UserInfoCard';

export function UserInfoContainer(props) {
    const emptyUser = {
        name:{
            first:'',
            last:''
        },
        picture:{
            large:'',
            medium:'',
            thumnail:''
        }
    };
    const [user, setUser] = useState(emptyUser);

    const getRandomUser = async () => {
        const url = 'https://randomuser.me/api';
        try {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            return jsonResponse.results[0];
        } catch (e) {
            console.error(e);
            return emptyUser;
        }
    }

    useEffect(() => {
        console.log('page loaded');
        getRandomUser().then((newUser) => {setUser(newUser)});
    }, []);

    return (
        <UserInfoCard 
        user={user}
        ></UserInfoCard>
    );
}