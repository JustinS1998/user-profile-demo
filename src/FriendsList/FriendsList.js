import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

export function FriendsList(props) {
    const { friends } = props;
    return (
        <ListGroup>
            {friends.map((element) => {
                return <ListGroup.Item>{element.name.first}</ListGroup.Item>
            })}
        </ListGroup>
    );
}