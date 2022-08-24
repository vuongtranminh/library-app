import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DigitOverlay from './DigitOverlay';
import './digit.scss';

const Digit = (props) => {

    const [value, setValue] = useState('');

    const focus = (index) => {
        const digitNode = document.getElementById(`lt-digit-input-${index}`);
        if (digitNode) {
            digitNode.focus()
        }
    };

    useEffect(() => {
        // This effect is for demo purposes!
        setTimeout(() => {
            if (props.index < 6) {
                setValue(props.index.toString());
            }
        }, 50 * props.index);

        setTimeout(() => {
            focus(6);
        }, 400);
    }, []);

    const focusNext = () => {
        const nextIndex = props.index + 1
        focus(nextIndex);
    };

    const focusPrev = () => {
        const prevIndex = props.index - 1
        focus(prevIndex);
    };

    const handleOnKeyDown = (e) => {
        if (e.key === 'Backspace') {
            setValue('');
            focusPrev();
        } else if (!isNaN(e.key)) {
            setValue(e.key);
            focusNext();
        }
    };

    return (
        <div className="lt-digit">
            <input id={`lt-digit-input-${props.index}`} type="text" value={value} onKeyDown={handleOnKeyDown} onChange={() => { }} />
            <div className="lt-digit__underline" />
            <DigitOverlay value={value} />
        </div>
    );
};

Digit.propTypes = {
    index: PropTypes.number.isRequired,
};

export default Digit;
