import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export function MyNavbar(props) {
    const url = 'https://github.com/JustinS1998/user-profile-demo';
    return (
        <Navbar bg='light'>
            <Navbar.Brand>User Profile Demo</Navbar.Brand>
            <Nav>
                <Nav.Link href={url}>Github</Nav.Link>
            </Nav>
        </Navbar>
    );
}