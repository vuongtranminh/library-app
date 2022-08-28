import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './select.scss';
import { isDeepEqual } from '~/utils';
import withErrorBoundary from '~/HOC/withErrorBoundary';
import { usePosition } from '~/hooks';

const Select = ({ items, value, itemText, onChooseOption }) => {

    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [cursor, setCursor] = useState(0);

    const selectRef = useRef(null)
    const inputRef = useRef(null)
    const optionsRef = useRef(null)

    console.log('isOpen: ' + isOpenOptions)

    // const [x, y] = usePosition(selectRef)
    // console.log(x, y)

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
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        const onClickOutSideInput = inputRef.current && !inputRef.current.contains(e.target)
        const onClickOutSideOptions = optionsRef.current && !optionsRef.current.contains(e.target)
        if (onClickOutSideInput && onClickOutSideOptions) {
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

    const options = useMemo(() => {
        return items.map((item, index) => (
            <div
                className={cx('lt-select__option', { 'lt-select__option--active': isDeepEqual(item, value) })}
                key={index}
                onClick={() => handleChooseOption(item)}
            >
                <div className="lt-select__option__overlay lt-select__option__overlay--top"></div>
                <div className="lt-select__option__overlay lt-select__option__overlay--bottom"></div>
                <i className="bx bxl-visual-studio"></i>
                <div className="lt-select__option__label">{itemText ? item[itemText] : item}</div>
            </div>
        ))
    }, [value])

    const selected = useMemo(() => {
        return itemText ? value[itemText] : value
    }, [value])

    return (
        <div className="lt-select" ref={selectRef}>
            <div className="lt-select-box">
                <input type="text" readOnly className='lt-select__input' ref={inputRef} onKeyDown={handleKeyDown} onClick={handleToggleOptions} />
                <div className="lt-select__selected">
                    <div className="lt-select__selected__value">
                        <span>{selected}</span>
                    </div>
                    <div className={cx('lt-select__chevrons', { 'lt-select__chevrons--active': isOpenOptions })}>
                        <i className="bx bxs-chevron-up"></i>
                        <i className="bx bxs-chevron-down"></i>
                    </div>
                </div>
                <div className={cx('lt-select__options', { 'lt-select__options--open': isOpenOptions })} ref={optionsRef}>
                    {options.map((option => option))}
                    <div className="lt-select__option-bg" style={style}></div>
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {
    items: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    itemText: PropTypes.string,
    onChooseOption: PropTypes.func.isRequired,
};

export default withErrorBoundary(Select);
