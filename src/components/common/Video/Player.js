import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Player = forwardRef(({ sources, ...props }, ref) => {

    return (
        <video ref={ref} className='lt-video__player' {...props}>
            {sources.map((source, index) => <source key={index} src={source.src} type={source.type} />)}
        </video >
    )
})

Player.propTypes = {
    sources: PropTypes.array.isRequired,
}

export default Player