import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';

export function UserInfo(props) {
    useEffect(() => {
        console.log('page loaded');
    }, []);

    return (
        <Container>UserInfo</Container>
    );
}