import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function FriendsList(props) {
    const { friends } = props;
    return (
        <Card style={{paddingTop:'10px', paddingBottom:'10px'}}>
            <Container>
                <h2 style={{ fontSize: '20px' }}>Friends</h2>
                <Row>
                    {friends.map((element) => {
                        return (
                            <Col xl={2} lg={3} md={4} sm={5} xs={6}
                            style={{marginBottom:'10px'}}>
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