import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';

export function UserInfo(props) {
    const {getRandomUser} = props;

    useEffect(() => {
        console.log('page loaded');
        getRandomUser();
    }, [getRandomUser]);

    return (
        <Container>UserInfo</Container>
    );
}