import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './LogginForm.css';
import LoggingForm from './LogginForm';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LoggingForm />, document.getElementById('LoggingForm'));
