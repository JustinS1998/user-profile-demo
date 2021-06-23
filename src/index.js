import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {UserProfile} from './UserProfile';

function App(props) {
    return (
        <UserProfile />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));