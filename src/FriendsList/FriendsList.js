import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function FriendsList(props) {
    const { friends } = props;
    return (
        <Card>
            <Container>
                <h2 style={{ fontSize: '20px' }}>Friends</h2>
                <Row>
                    {friends.map((element) => {
                        return (
                            <Col sm={2}>
                                <Card>
                                    <Card.Img src={element.picture.large} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '15px' }}>{element.name.first} {element.name.last}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Card>
    );
}