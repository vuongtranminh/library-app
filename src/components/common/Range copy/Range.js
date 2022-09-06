import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './range.scss';

const Range = (props) => {
    const [value, setValue] = useState(100);

    const container = useRef(null);
    const btn = useRef(null);
    const color = useRef(null);
    const tooltip = useRef(null);

    useEffect(() => {
        dragElement();
    }, []);

    const dragElement = () => {
        container.current.addEventListener('mousedown', (e) => {
            onMouseMove(e);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });
    };

    const onMouseMove = (e) => {
        e.preventDefault();
        let targetRect = container.current.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) {
            x = targetRect.width;
        }
        if (x < 0) {
            x = 0;
        }
        btn.current.x = x - 10;
        btn.current.style.left = btn.current.x + 'px';

        // get the position of the button inside the container (%)
        let percentPosition = ((btn.current.x + 10) / targetRect.width) * 100;

        // color width = position of button (%)
        color.current.style.width = percentPosition + '%';

        // move the tooltip when button moves, and show the tooltip
        tooltip.current.style.left = btn.current.x - 5 + 'px';
        tooltip.current.style.opacity = 1;

        // show the percentage in the tooltip
        tooltip.current.textContent = Math.round(percentPosition) + '%';
    };

    const onMouseUp = (e) => {
        window.removeEventListener('mousemove', onMouseMove);
        tooltip.current.style.opacity = 0;

        btn.current.addEventListener('mouseover', () => {
            tooltip.current.style.opacity = 1;
        });

        btn.current.addEventListener('mouseout', () => {
            tooltip.current.style.opacity = 0;
        });
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="slider">
            <div className="slider__box" ref={container}>
                <span className="slider__btn" id="find" ref={btn}></span>
                <span className="slider__color" ref={color}></span>
                <span className="slider__tooltip" ref={tooltip}>
                    50%
                </span>
            </div>
        </div>
    );
};

Range.propTypes = {};

export default Range;
