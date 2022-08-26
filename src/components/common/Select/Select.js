import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './select.scss';
import { typeOf } from '~/utils';

const Select = (props) => {
    const { items, value, itemText, onChooseOption } = props;

    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [cursor, setCursor] = useState(-1);

    const handleToggleOptions = () => {
        setIsOpenOptions(!isOpenOptions);
    };

    const handleChooseOption = (value) => {
        onChooseOption(value);
        setIsOpenOptions(false);
    };

    useEffect(() => {
        if (isOpenOptions) {
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => window.removeEventListener("keydown", null);
    }, [isOpenOptions])

    const handleKeyDown = e => {
        switch (e.key) {
            case 'ArrowDown':
                setCursor((prevCursor) => prevCursor + 1 < items.length ? prevCursor + 1 : 0)
                break;
            case 'ArrowUp':
                setCursor((prevCursor) => prevCursor - 1 > 0 ? prevCursor - 1 : 0)
                break;
            case 'Enter':
                console.log('cursor: ' + cursor)
                cursor > -1 && handleChooseOption(items[cursor])
                break;
            default:
                return;
        }
    }

    console.log(cursor)

    return (
        <div className="lt-select">
            <div className="lt-select-box">
                <div className="lt-select__selected" onClick={handleToggleOptions}>
                    <div className="lt-select__selected__value">
                        <span>{value}</span>
                    </div>
                    <div className={cx('lt-select__chevrons', { 'lt-select__chevrons--active': isOpenOptions })}>
                        <i className="bx bxs-chevron-up"></i>
                        <i className="bx bxs-chevron-down"></i>
                    </div>
                </div>
                <div className={cx('lt-select__options', { 'lt-select__options--open': isOpenOptions })}>
                    {items.map((item) => (
                        <div
                            className={cx('lt-select__option', { 'lt-select__option--active': value === item })}
                            key={item}
                            onClick={() => handleChooseOption(item)}
                        >
                            <div className="lt-select__option__overlay lt-select__option__overlay--top"></div>
                            <div className="lt-select__option__overlay lt-select__option__overlay--bottom"></div>
                            <i className="bx bxl-visual-studio"></i>
                            <div className="lt-select__option__label">{item}</div>
                        </div>
                    ))}
                    <div className="lt-select__option-bg"></div>
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {};

export default Select;
