import React from 'react';

export function FriendsList(props) {
    const {friends} = props;
    return(
        <>
        {friends.map((element, idx) => {
            <p>{element.name.first}</p>
        })}
        </>
    );
}