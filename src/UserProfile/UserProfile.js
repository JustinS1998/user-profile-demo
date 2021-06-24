import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserInfoCard} from './UserInfoCard';

export function UserProfile(props) {
    const {user} = props;
    return (
        <Container fluid>
            <Row className="flex-nowrap">
                <Col lg={2}><UserInfoCard user={user} /></Col>
                <Col lg={4}>2</Col>
            </Row>
        </Container>
    );
}