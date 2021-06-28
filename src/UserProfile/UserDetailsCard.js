import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export function UserDetailsCard(props) {
    const { user } = props;
    const { name, location } = user;
    return (
        <ListGroup style={{marginBottom:'10px'}}>
            <ListGroup.Item><strong>Full Name</strong> {name.first} {name.last}</ListGroup.Item>
            <ListGroup.Item><strong>Email</strong> {user.email}</ListGroup.Item>
            <ListGroup.Item><strong>Phone</strong> {user.phone}</ListGroup.Item>
            <ListGroup.Item><strong>Cell</strong> {user.cell}</ListGroup.Item>
            <ListGroup.Item><strong>Address</strong> {location.street.number} {location.street.name}, {location.city}, {location.state}</ListGroup.Item>
        </ListGroup>
    );
}