import React, { useState } from 'react';
import { UserInfo } from './UserInfo';

export function UserInfoContainer(props) {
    const getRandomUser = async () => {
        const url = 'https://randomuser.me/api';
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse.results[0];
    }

    return (
        <UserInfo getRandomUser={getRandomUser}></UserInfo>
    );
}