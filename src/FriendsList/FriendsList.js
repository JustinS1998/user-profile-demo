import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function FriendsList(props) {
    const { friends } = props;
    return (
        <Container style={{border:'solid black 1px'}}>
            <Row className='flex-nowrap'>
                {friends.map((element) => {
                    return (
                        <Col lg={4}>
                            <Card>
                                <Card.Img src={element.picture.thumbnail}/>
                                <Card.Body>
                                    <Card.Title style={{fontSize:'15px'}}>{element.name.first} {element.name.last}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}