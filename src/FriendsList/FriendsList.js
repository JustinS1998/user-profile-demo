import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function FriendsList(props) {
    const { friends } = props;
    return (
        <Container style={{border:'solid lightgrey 1px', borderRadius:'5px'}}>
            <h2 style={{fontSize:'20px'}}>Friends</h2>
            {/* <Row className='flex-nowrap'> */}
            <Row>
                {friends.map((element) => {
                    return (
                        <Col lg={2}>
                            <Card>
                                <Card.Img src={element.picture.large}/>
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