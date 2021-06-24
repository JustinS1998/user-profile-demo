import React, { useEffect, useState } from "react";

import {FriendsList} from './FriendsList';

export function FriendsListContainer(props) {
    const [friends, setFriends] = useState([]);
    const getFriends = async () => {
        const url = 'https://randomuser.me/api/?results=5';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        return jsonResponse.results;
    }

    useEffect(() => {
        getFriends().then((newFriends) => { setFriends([...newFriends]) })
        .catch((error) => console.error(error));
    }, []);

    return (
        <>
        {(friends.length > 0) ? <FriendsList friends={friends} /> : <p>Loading friends</p>}
        </>
    );
}