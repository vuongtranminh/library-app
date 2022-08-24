import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = ({ children, title }) => {

    document.title = 'Library - ' + title

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>{children}</div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Helmet