import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function UserDetailsCard(props) {
    const { user } = props;
    const { name } = user;
    return (
        <ListGroup>
            <ListGroup.Item>Full Name</ListGroup.Item>
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item>Phone</ListGroup.Item>
            <ListGroup.Item>Cell</ListGroup.Item>
            <ListGroup.Item>Address</ListGroup.Item>
        </ListGroup>
    );
}