import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export function MyNavbar(props) {
    return (
        <Navbar bg='light' expand='sm'>
            <Navbar.Brand>User Profile Demo</Navbar.Brand>
        </Navbar>
    );
}