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
            {/* <Row className="flex-nowrap"> */}
            <Row>
                <Col lg={4}><UserInfoCard user={user} /></Col>
                <Col lg={8}>
                    <UserDetailsCard user={user} />
                    <FriendsListContainer />
                </Col>
            </Row>
        </Container>
    );
}