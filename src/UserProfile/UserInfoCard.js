import React from 'react';
import Card from 'react-bootstrap/Card';

export function UserInfoCard(props) {
    const { user } = props;
    const { name } = user;
    return (
        <Card>
            <Card.Img src={user.picture.large} />
            <Card.Body>
                <Card.Title>{name.first} {name.last}</Card.Title>
                <Card.Text>Sample text</Card.Text>
            </Card.Body>
        </Card>
    );
}