import React from 'react';
import './document.scss';

const Document = (props) => {
    return <div className="lt-document">{props.children}</div>;
};

export const DocumentTitle = (props) => {
    return <div className="lt-document__title">{props.children}</div>;
};

export const DocumentBody = (props) => {
    return <div className="lt-document__body">{props.children}</div>;
};

export default Document;
