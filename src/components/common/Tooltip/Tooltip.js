import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.scss';
import cx from 'classnames';

const Tooltip = (props) => {
    const { tooltip, flow, children, className } = props; // flow: left, up, down, right : default: up

    const classes = cx('lt-tooltip', {
        [className]: className,
    });

    return (
        <span className={classes} tooltip={tooltip} flow={flow}>
            {children}
        </span>
    );
};

Tooltip.propTypes = {
    children: PropTypes.any,
    flow: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
};

export default Tooltip;
