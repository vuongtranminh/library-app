import React, { memo, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { FullscreenIcon, PauseIcon, PlayIcon, RectangleIcon, SkipNextIcon, VideosIcon, VolumeFullIcon } from './Icons'
import Tooltip from '../Tooltip'
import { useWhyDidYouUpdate } from '~/hooks'

const Controls = ({ playerRef, isPlay, onTogglePlay }) => {

    const handleTogglePlay = () => {
        onTogglePlay()
        isPlay ? handlePause() : handlePlay()
    }

    const [volumeLevel, setVolumeLevel] = useState('high')

    const handlePlay = () => {
        playerRef.current.play()
    }

    const handlePause = () => {
        playerRef.current.pause()
    }

    return (
        <div className='lt-video__controls'>
            <div className='lt-video__thumbnail-img'></div>
            <div className='lt-video__process'>
                <div className='lt-video__timeline'>
                    <div className='lt-video__preview-img'></div>
                    <div className='lt-video__thumb-indicator'></div>
                </div>
            </div>
            <div className='lt-video__actions'>
                <div className='lt-video__buttons'>
                    <Tooltip tooltip="Tạm dừng" flow="up">
                        <div className='lt-video__button lt-video__button--pause-icon' onClick={handleTogglePlay}><TogglePlayIcon isPlay={isPlay} /></div>
                    </Tooltip>
                    <Tooltip tooltip="Tiếp theo" flow="up">
                        <div className='lt-video__button lt-video__button--skip-next-icon'><SkipNextIcon /></div>
                    </Tooltip>
                    <div className='lt-video__volume'>
                        <Tooltip tooltip="Tắt tiếng" flow="up">
                            <div className='lt-video__button lt-video__button--volume-icon'><VolumeFullIcon /></div>
                        </Tooltip>
                        <div className='lt-video__volume__range'>
                            <input type="range" min="0" max="100" value="1" />
                        </div>
                    </div>
                    <div className='lt-video__duration'>
                        <div className="lt-video__current-time">0:00</div>
                        /
                        <div className="lt-video__total-time"></div>
                    </div>
                </div>
                <div className='lt-video__buttons'>
                    <Tooltip tooltip="Trình phát thu nhỏ" flow="up">
                        <div className='lt-video__button lt-video__button--videos-icon'><VideosIcon /></div>
                    </Tooltip>
                    <Tooltip tooltip="Chế độ rạp chiếu phim" flow="up">
                        <div className='lt-video__button lt-video__button--rectangle-icon'><RectangleIcon /></div>
                    </Tooltip>
                    <Tooltip tooltip="Toàn màn hình" flow="up">
                        <div className='lt-video__button lt-video__button--screen-icon'><FullscreenIcon /></div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

const TogglePlayIcon = memo(({ isPlay }) => {
    useWhyDidYouUpdate('TogglePlayIcon', { isPlay })
    return isPlay ? <PauseIcon /> : <PlayIcon />
})

Controls.propTypes = {}

export default Controls