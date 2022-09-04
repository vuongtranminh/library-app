import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './video.scss'
import videos from '~/assets/videos'
import Player from './Player'
import { VIDEO_TYPE } from './videoType'
import Controls from './Controls'

const Video = props => {

    const playerRef = useRef(null)

    const [isPlay, setIsPlay] = useState(false)

    const handleTogglePlay = () => {
        setIsPlay(!isPlay)
    }

    const sources = [{
        src: videos.video,
        type: VIDEO_TYPE.mp4,
    }]

    return (
        <div className='lt-video'>
            <Player ref={playerRef} sources={sources} />
            <Controls playerRef={playerRef} isPlay={isPlay} onTogglePlay={handleTogglePlay} />
        </div>
    )
}

Video.propTypes = {}

export default Video