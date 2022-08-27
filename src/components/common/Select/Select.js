import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './select.scss';
import { typeOf } from '~/utils';

const Select = (props) => {
    const { items, value, itemText, onChooseOption } = props;

    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [cursor, setCursor] = useState(0);

    const inputRef = useRef()
    const optionsRef = useRef()
    const optionBg = useRef()

    const handleOpenOptions = () => {
        setIsOpenOptions(true)
    }

    const handleCloseOptions = () => {
        inputRef.current.blur()
        setIsOpenOptions(false)
    }

    const handleChooseOption = (value) => {
        handleCloseOptions();
        onChooseOption(value);
        setCursor(0)
    };

    // click outside result close
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
            handleCloseOptions();
        }
    };

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

    useEffect(() => {
        const options = optionsRef.current.querySelectorAll('.lt-select__option')
        Array.prototype.forEach.call(options, (option, index) => {
            option.addEventListener('mouseover', () => {
                setCursor(index)
            })
        })
    }, [])

    const style = useMemo(() => {
        switch (cursor) {
            case 0:
                return {
                    top: '0px',
                    borderRadius: '4px 4px 0 0',
                }
            case items.length - 1:
                return {
                    top: `${cursor * 40}px`,
                    borderRadius: '0 0 4px 4px',
                }
            default:
                return {
                    top: `${cursor * 40}px`,
                }
        }
    }, [cursor])

    const handleToggleOptions = () => {
        if (isOpenOptions) {
            handleCloseOptions()
        } else {
            handleOpenOptions()
        }
    }

    return (
        <div className="lt-select">
            <div className="lt-select-box">
                <input type="text" readOnly className='lt-select__input' ref={inputRef} onKeyDown={handleKeyDown} onClick={handleToggleOptions} />
                <div className="lt-select__selected">
                    <div className="lt-select__selected__value">
                        <span>{value}</span>
                    </div>
                    <div className={cx('lt-select__chevrons', { 'lt-select__chevrons--active': isOpenOptions })}>
                        <i className="bx bxs-chevron-up"></i>
                        <i className="bx bxs-chevron-down"></i>
                    </div>
                </div>
                <div className={cx('lt-select__options', { 'lt-select__options--open': isOpenOptions })} ref={optionsRef}>
                    {items.map((item, index) => (
                        <div
                            className={cx('lt-select__option', { 'lt-select__option--active': value === item })}
                            key={index}
                            onClick={() => handleChooseOption(item)}
                        >
                            <div className="lt-select__option__overlay lt-select__option__overlay--top"></div>
                            <div className="lt-select__option__overlay lt-select__option__overlay--bottom"></div>
                            <i className="bx bxl-visual-studio"></i>
                            <div className="lt-select__option__label">{item}</div>
                        </div>
                    ))}
                    <div className="lt-select__option-bg" ref={optionBg} style={style}></div>
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {};

export default Select;
