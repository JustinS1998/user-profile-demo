import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserInfoCard} from './UserInfoCard';
import { UserDetailsCard } from './UserDetailsCard';
import {FriendsListContainer} from '../FriendsList/FriendsListContainer';

export function UserProfile(props) {
    const {user} = props;
    return (
        <Container fluid>
            <Row>
                <Col sm={3}><UserInfoCard user={user} /></Col>
                <Col sm={9}>
                    <UserDetailsCard user={user} />
                    <FriendsListContainer />
                </Col>
            </Row>
        </Container>
    );
}