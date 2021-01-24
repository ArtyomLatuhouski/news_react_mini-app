//INNER
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
// LOCAL
import {rootReducer} from "./redux/reducers/rootReducer";



const store= createStore(rootReducer,compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


