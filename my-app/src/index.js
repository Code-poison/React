import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import './LogginForm.css';
// import LoggingForm from './LogginForm';

import LiftingStateUp from './LiftingStateUp.js';

// import UserList from './UserList.js';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoggingForm />, document.getElementById('LoggingForm'));

ReactDOM.render(<LiftingStateUp/>, document.getElementById('LiftingStateUp'));

// ReactDOM.render(<UserList />, document.getElementById('UserList'));