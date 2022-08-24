import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DigitOverlay = (props) => {
    const [value, setValue] = useState('');
    const getRand = (min, max) => {
        const rand = Math.floor(Math.random() * max) + min;
        const sign = Math.round(Math.random()) * 2 - 1;
        return rand * sign; // Positive or negative;
    };

    const [position, setPosition] = useState(() => {
        return {
            left: getRand(0, 150),
            top: getRand(0, 150),
        };
    });

    useEffect(() => {
        if (props.value !== '') {
            setPosition({ left: 0, top: 0 });
            setValue(props.value);
        } else {
            setPosition({ left: getRand(0, 150), top: getRand(0, 150) });
        }
    }, []);

    const getStyles = () => {
        const styles = {
            fontSize: '10rem',
            left: `${position.left}px`,
            opacity: 0,
            top: `${position.top}px`,
        };

        if (props.value !== '') {
            styles.fontSize = '2.5rem';
            styles.opacity = 1;
        }

        return styles;
    };

    return (
        <h1 className="digit-overlay" style={getStyles()}>
            {value}
        </h1>
    );
};

DigitOverlay.propTypes = {};

export default DigitOverlay;
