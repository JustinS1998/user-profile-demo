import React, { useState } from 'react';
import { UserInfo } from './UserInfo';

export function UserInfoContainer(props) {
    const getRandomUser = () => {
        const url = 'https://randomuser.me/api';
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data.results[0]))
            .catch(err => console.error(err));
    }

    return (
        <UserInfo getRandomUser={getRandomUser}></UserInfo>
    );
}