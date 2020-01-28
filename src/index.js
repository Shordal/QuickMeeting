import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import QuickMeeting from './components/QuickMeeting';

ReactDOM.render(<QuickMeeting />, document.getElementById('root'));

serviceWorker.unregister();
