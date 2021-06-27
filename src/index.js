import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {UserProfileContainer} from './UserProfile/UserProfileContainer';
import {MyNavbar} from './MyNavbar/MyNavbar';

function App(props) {
    return (
        <>
        <MyNavbar />
        <UserProfileContainer />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));