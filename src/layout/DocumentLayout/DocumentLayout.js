import React from 'react';
import { Outlet } from 'react-router-dom';
import './document-layout.scss';

const DocumentLayout = () => {
    return (
        <div className="lt-document-layout">
            <Outlet />
        </div>
    );
};

export default DocumentLayout;
