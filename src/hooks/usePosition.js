import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useEventListener from './useEventListener'

const usePosition = (ref) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)

    useEffect(() => {
        getPosition()
    }, [])

    const getPosition = () => {
        if (!ref.current) return

        const x = ref.current.offsetLeft;
        setX(x);

        const y = ref.current.offsetTop;
        setY(y);
    };

    useEventListener('resize', getPosition)

    return [x, y];
}

usePosition.propTypes = {
    ref: PropTypes.object.isRequired,
}

export default usePosition