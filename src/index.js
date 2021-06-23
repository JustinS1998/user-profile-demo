import React from 'react';
import ReactDOM from 'react-dom'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    return (
        <>
        <h1>Hello world</h1>
        <Button>Test</Button>
        <Toast>Hello world</Toast>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));