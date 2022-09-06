import React from 'react';
import PropTypes from 'prop-types';
import './range.scss';

const Range = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="lt-range">
            <div className="lt-range__box">
                <input className="lt-range__input" type="range" value={value} onChange={handleChange} />
                <div className="lt-range__btn-wrapper">
                    <span className="lt-range__btn" style={{ left: `${value}%` }}></span>
                </div>
                <span className="lt-range__color" style={{ width: `${value}%` }}></span>
                <span className="lt-range__tooltip" style={{ left: `${value}%` }}>
                    {value}%
                </span>
            </div>
        </div>
    );
};

Range.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Range;
