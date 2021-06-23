import React from 'react';
import ReactDOM from 'react-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import {UserInfoContainer} from './UserInfo/UserInfoContainer';

function App(props) {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
            </Row>
            <UserInfoContainer />
        </Container>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));