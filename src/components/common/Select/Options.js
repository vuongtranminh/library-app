import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

const Options = props => {
    const optionsRef = useRef(null)
    const { options, isOpenOptions, style } = useSelector((state) => state.optionsRoot);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(optionsRef)
    })

    return (
        <div className={cx('lt-select__options', { 'lt-select__options--open': isOpenOptions })} ref={optionsRef}>
            {options.map((option => option))}
            <div className="lt-select__option-bg" style={style}></div>
        </div>
    )
}

Options.propTypes = {}

export default Options