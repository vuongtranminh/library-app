import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';

const Button = ({ children, variant = 'text', size = 'full', className, ...passProps }) => {
    const classes = cx('lt-button', `lt-button--${variant}`, `lt-button--${size}`, {
        [className]: className,
    });

    return (
        <button className={classes} {...passProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
};

export const StartIcon = ({ className, children, ...passProps }) => {
    const classes = cx('lt-button__icon', 'lt-button__icon--start', {
        className,
    });
    return (
        <span className={classes} {...passProps}>
            {children}
        </span>
    );
};

export const EndIcon = ({ className, children, ...passProps }) => {
    const classes = cx('lt-button__icon', 'lt-button__icon--end', {
        className,
    });
    return (
        <span className={classes} {...passProps}>
            {children}
        </span>
    );
};

export default Button;
