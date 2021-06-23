import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserInfoContainer} from './UserInfo/UserInfoContainer';

export function UserProfile(props) {
    return (
        <Container fluid>
            <Row className="flex-nowrap">
                <Col lg={2}><UserInfoContainer /></Col>
                <Col lg={4}>2</Col>
            </Row>
        </Container>
    );
}