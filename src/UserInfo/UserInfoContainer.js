import React, { useState } from 'react';
import { UserInfo } from './UserInfo';

export function UserInfoContainer(props) {
    const [user, setUser] = useState({});

    const getRandomUser = () => {
        const url = 'https://randomuser.me/api';
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <UserInfo getRandomUser={getRandomUser}></UserInfo>
    );
}