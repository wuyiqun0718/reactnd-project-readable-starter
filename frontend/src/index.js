import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import changeRoute  from './reducer';

const store = createStore(
    changeRoute,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <MuiThemeProvider>
                            <App />
                        </MuiThemeProvider>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
