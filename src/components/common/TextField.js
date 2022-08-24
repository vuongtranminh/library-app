import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from '~/utils';

const TextField = forwardRef((props, ref) => {

    const { label, rules, onChange, value, ...passProps } = props;

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

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate(),
            forcus: () => handleForcus(),
        };
    });

    const handleForcus = () => {
        ref.current.forcus();
    };

    const handleBlur = () => {
        validate();
    };

    return (
        <div className="lt-text-field">
            <div className="lt-text-field__input">
                <input placeholder=" " {...passProps} onChange={handleChange} onBlur={handleBlur} value={value} />
                <label className='lt-text-field__label'>{label}</label>
            </div>
            {error && <p className='lt-text-field__error'>{error}</p>}
        </div>
    );
});

TextField.propTypes = {
    label: PropTypes.string,
    rules: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

TextField.displayName = 'TextField';

export default TextField;
