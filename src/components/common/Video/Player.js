import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'

const Player = ({ sources, ...props }, ref) => {

    const videoRef = useRef(null)

    useImperativeHandle(ref, () => {

    })

    return (
        <video ref={videoRef} className='lt-video__player' {...props}>
            {sources.map((source, index) => <source key={index} src={source.src} type={source.type} />)}
        </video >
    )
}

Player.propTypes = {}

export default forwardRef(Player)