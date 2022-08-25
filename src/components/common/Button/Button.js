import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';

const Button = ({ children, variant = 'text', size = 'full', className, ...passProps }) => {
    // const classes = cx('lt-button', `lt-button--${variant}`, `lt-button--${size}`, {
    //     [className]: className,
    // });

    // return (
    //     <button className={classes} {...passProps}>
    //         {children}
    //     </button>
    // );

    const timeoutId = useRef(null)

    const [animate, setAnimate] = useState(false);

    const classes = cx('bubbly-button', `lt-button--${variant}`, `lt-button--${size}`, {
        'animate': animate,
        [className]: className,
    });

    const handleClick = (e) => {
        e.preventDefault();

        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }

        timeoutId.current = setTimeout(() => {
            setAnimate(true)
        }, 250)
    }

    useEffect(() => {
        let timerId = null
        if (animate) {
            timerId = setTimeout(() => {
                setAnimate(false)
            }, 700)
        }
        return () => clearTimeout(timerId)
    }, [animate])

    useEffect(() => {
        console.log('mounted')

        return () => {
            console.log('unmount')
        }
    }, [])

    return (
        <button className={classes} {...passProps} onClick={handleClick}>
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
