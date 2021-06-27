import React from 'react';

//import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function FriendsList(props) {
    const { friends } = props;
    return (
        // <ListGroup>
        //     {friends.map((element) => {
        //         return <ListGroup.Item>{element.name.first}</ListGroup.Item>
        //     })}
        // </ListGroup>
        <Container>
            <Row className='flex-nowrap'>
                {friends.map((element) => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img src={element.picture.thumbnail}/>
                                <Card.Body>
                                    <Card.Title>{element.name.first} {element.name.last}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}