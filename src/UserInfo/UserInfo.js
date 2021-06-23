import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';

export function UserInfo(props) {
    const [user, setUser] = useState({
        name: {
            first: '',
            last: ''
        }
    });

    const {getRandomUser} = props;

    useEffect(() => {
        console.log('page loaded');
        getRandomUser().then((newUser) => {setUser(newUser)});
    }, [getRandomUser]);

    return (
        <Container>{user.name.first}</Container>
    );
}