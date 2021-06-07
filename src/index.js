import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

function renderDOM() {
    ReactDOM.render(
        <React.StrictMode>
            <meta charSet="UTF-8"/>
            <BrowserRouter>
                <App state={store.state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDOM(store.state)
store.subscribe(renderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();