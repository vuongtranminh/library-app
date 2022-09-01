import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './input.scss';
import { isString } from '~/utils';

const Input = (props, ref) => {
    const {
        label,
        rules,
        value,
        onChange,
        regular,
        border,
        filled,
        effect = 1,
        className,
        hideDetail,
        ...passProps
    } = props;

    const inputRef = useRef(null)

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        onChange(e);
    };

    const validate = () => {
        if (rules) {
            let error = '';
            for (const rule of rules) {
                error = rule(value);
                if (isString(error)) {
                    setError(error);
                    return false;
                }
            }
        }

        return true;
    };

    useImperativeHandle(ref, () => ({
        validate: () => validate(),
        forcus: () => handleForcus(),
    }));

    const handleForcus = () => {
        inputRef.current.focus();
    };

    const handleBlur = () => {
        !hideDetail && validate();
    };

    const classes = cx('lt-textfield', {
        [className]: className,
    });

    if (border) {
        return (
            <div className={classes}>
                <div className="lt-textfield__inner">
                    <input
                        ref={inputRef}
                        className={`lt-textfield__input lt-textfield__input--border lt-textfield__input--border-${effect}`}
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value}
                        {...passProps}
                    />
                    <label>{label}</label>
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                {error && <div className="lt-textfield__message">{error}</div>}
            </div>
        );
    } else if (filled) {
        return (
            <div className={classes}>
                <div className="lt-textfield__inner">
                    <input
                        ref={inputRef}
                        className={`lt-textfield__input lt-textfield__input--filled lt-textfield__input--filled-${effect}`}
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value}
                        {...passProps}
                    />
                    <label>{label}</label>
                    <span className="focus-bg"></span>
                </div>
                {error && <div className="lt-textfield__message">{error}</div>}
            </div>
        );
    } else {
        // default regular
        return (
            <div className="lt-textfield">
                <div className="lt-textfield__inner">
                    <input
                        ref={inputRef}
                        className={`lt-textfield__input lt-textfield__input--regular lt-textfield__input--regular-${effect}`}
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={value}
                        {...passProps}
                    />
                    <label>{label}</label>
                    <span className="focus-border"></span>
                </div>
                {error && <div className="lt-textfield__message">{error}</div>}
            </div>
        );
    }
};

Input.propTypes = {};

export default forwardRef(Input);
