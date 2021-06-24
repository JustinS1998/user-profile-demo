import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {UserProfileContainer} from './UserProfile/UserProfileContainer';

function App(props) {
    return (
        <UserProfileContainer />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));