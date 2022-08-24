import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DigitOverlay from './DigitOverlay';
import './digit.scss';

const Digit = (props) => {
    const [value, setValue] = useState('');

    const focus = (index) => {
        document.getElementById(`digit-input-${index}`).focus();
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
        const nextIndex = Math.min(props.index + 1, 9);
        focus(nextIndex);
    };

    const focusPrev = () => {
        const prevIndex = Math.max(0, props.index - 1);
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

    const id = `digit-input-${props.index}`;

    return (
        <div className="digit">
            <input id={id} type="text" value={value} onKeyDown={handleOnKeyDown} onChange={() => {}} />
            <div className="underline" />
            <DigitOverlay value={value} />
        </div>
    );
};

Digit.propTypes = {};

export default Digit;
