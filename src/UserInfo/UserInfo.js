import React from 'react';
import Container from 'react-bootstrap/Container';

export function UserInfo(props) {
    return (
        <Container>{props.user.name.first}</Container>
    );
}