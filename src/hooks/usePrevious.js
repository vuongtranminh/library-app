import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const usePrevious = value => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]);  // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

usePrevious.propTypes = {
    value: PropTypes.any.isRequired,
}

export default usePrevious