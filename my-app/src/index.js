import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Acount from './LogginForm';
import Clock from './tick';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Acount/>, document.getElementById('Acount-Input'));
ReactDOM.render(<Acount/>, document.getElementById('Acount-Input2'));
ReactDOM.render(<Clock />, document.getElementById('ClickRoot'));
registerServiceWorker();
