import React, { useEffect, useState } from "react";

import {FriendsList} from './FriendsList';

export function FriendsListContainer(props) {
    const [friends, setFriends] = useState([]);
    const getFriends = async () => {
        const url = 'https://randomuser.me/api/?';
        const options = 'results=5';
        const endpoint = url + options;
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    };

    useEffect(() => {
        // getFriends.then((newFriends) => {setFriends([...newFriends])});
        //getFriends.then(()=>console.log('friends loaded'));
    }, []);

    return (
        <FriendsList friends={friends} />
    );
}