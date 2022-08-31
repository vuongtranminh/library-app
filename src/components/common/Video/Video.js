import React from 'react'
import PropTypes from 'prop-types'
import './video.scss'
import videos from '~/assets/videos'

const Video = props => {
    return (
        <video controls>
            <source src="video.webm" type="video/webm" />
            <source src="video.ogg" type="video/ogg" />
            <source src={videos.video} type="video/mp4" />
        </video >
    )
}

Video.propTypes = {}

export default Video