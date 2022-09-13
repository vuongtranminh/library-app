import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './range.scss';

const Range = ({ value, onChange, step = 1 }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="lt-range">
            <div className="lt-range__box">
                <input className="lt-range__input" type="range" value={value} onChange={handleChange} step={step} />
                <div className="lt-range__btn-wrapper">
                    <span className="lt-range__btn" style={{ left: `${value}%` }}>
                        <span className='lt-range__btn__icon'></span>
                    </span>
                </div>
                <span className="lt-range__color" style={{ width: `${value}%` }}></span>
                <span className="lt-range__tooltip" style={{ left: `${value}%` }}>
                    {value}%
                </span>
            </div>
        </div>
    );

    // const container = useRef(null);
    // const btn = useRef(null);
    // const color = useRef(null);
    // const tooltip = useRef(null);

    // const handleChange = (e) => {
    //     onChange(e.target.value);
    // };

    // useEffect(() => {
    //     let targetRect = container.current.getBoundingClientRect().width;
    //     console.log(targetRect);
    //     let btnPosition = (value / 100) * targetRect;
    //     btn.current.style.left = btnPosition + 'px';
    //     color.current.style.width = btnPosition + 'px';
    //     tooltip.current.style.left = btnPosition + 'px';
    //     console.log(btn.current);
    // }, [value]);

    // return (
    //     <div className="lt-range">
    //         <div className="lt-range__box" ref={container}>
    //             <input className="lt-range__input" type="range" value={value} onChange={handleChange} />
    //             <div className="lt-range__btn-wrapper">
    //                 <span className="lt-range__btn" ref={btn}></span>
    //             </div>
    //             <span className="lt-range__color" ref={color}></span>
    //             <span className="lt-range__tooltip" ref={tooltip}>
    //                 {value}%
    //             </span>
    //         </div>
    //     </div>
    // );
};

Range.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Range;
