import React, { Component } from 'react';
import './error-boundary.scss'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className='lt-error-boundary'>
                    <h2 className='lt-error-boundary__title'>🙁<span>!!! Something went wrong.</span></h2>
                    <h3 className='lt-error-boundary__message'>Please check me again!!!</h3>
                </div>
            );
        }
        return this.props.children;
    }
}
