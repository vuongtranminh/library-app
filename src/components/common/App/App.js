import React from 'react';
import PropTypes from 'prop-types';
import './app.scss';

const App = (props) => {
    return <div className="app">{props.children}</div>;
};

export const AppHeader = (props) => {
    return <div className="app__header">{props.children}</div>;
};

export const AppBody = (props) => {
    return <div className="app__body">{props.children}</div>;
};

App.propTypes = {};

export default App;
