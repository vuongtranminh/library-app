import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Range from '../Range';
import {
    FullscreenIcon,
    PauseIcon,
    PlayIcon,
    RectangleIcon,
    SkipNextIcon,
    VideosIcon,
    VolumeFullIcon,
    VolumeLowIcon,
    VolumeMuteIcon,
} from './Icons';
import Tooltip from '../Tooltip';
import { useWhyDidYouUpdate } from '~/hooks';
import { HALF_VOLUME, MAX_VOLUME, MIN_VOLUME, VIDEO_VOLUME } from './videoType';
import { formatDuration, takeDecimalNumber } from '~/helpers';

const Controls = ({ videoContainerRef, videoRef, isPlay, onTogglePlay, onPlay }) => {
    const [volumeLevel, setVolumeLevel] = useState(VIDEO_VOLUME.high);
    const [volume, setVolume] = useState(50);
    const [volumeBeforeMuted, setVolumeBeforeMuted] = useState(50);
    const [duration, setDuration] = useState(0);
    const [process, setProcess] = useState(0);
    const [totalTime, setTotalTime] = useState('00:00');
    const [currentTime, setCurrentTime] = useState('00:00');
    const [isFullScreen, setIsFullScreen] = useState(false)

    const handleTogglePlay = () => {
        onTogglePlay()
    }

    const handleToggleMuted = () => {
        if (videoRef.current.muted) {
            videoRef.current.muted = false;
            if (volumeBeforeMuted == 0) {
                videoRef.current.volume = MAX_VOLUME;
                setVolume(100);
            } else {
                setVolume(volumeBeforeMuted);
            }
        } else {
            videoRef.current.muted = true;
            setVolumeBeforeMuted(volume);
            setVolume(0);
        }
    };

    useEffect(() => {
        videoRef.current.addEventListener('loadeddata', initVideo);
        return () => videoRef.current.removeEventListener('loadeddata', initVideo);
    }, []);

    const initVideo = () => {
        onPlay()
        videoRef.current.volume = volume / 100;
        const duration = videoRef.current.duration;
        setDuration(duration);
        setTotalTime(formatDuration(duration));
    };

    const handleChangeVolume = (value) => {
        const volume = value / 100;
        if (value > 0) {
            if (videoRef.current.muted) {
                videoRef.current.muted = false;
            }
        } else {
            videoRef.current.muted = true;
            setVolumeBeforeMuted(0);
        }
        videoRef.current.volume = volume;
        setVolume(value);
    };

    useEffect(() => {
        videoRef.current.addEventListener('volumechange', handleVolumeLevel);
        return () => videoRef.current.removeEventListener('volumechange', handleVolumeLevel);
    }, []);

    const handleVolumeLevel = () => {
        if (videoRef.current.muted || videoRef.current.volume === MIN_VOLUME) {
            setVolumeLevel(VIDEO_VOLUME.muted);
        } else if (videoRef.current.volume < HALF_VOLUME) {
            setVolumeLevel(VIDEO_VOLUME.low);
        } else {
            setVolumeLevel(VIDEO_VOLUME.high);
        }
    };

    const handleClickTheaterMode = () => {
        videoRef.current.requestPictureInPicture();
    };

    useEffect(() => {
        if (duration) {
            videoContainerRef.current.addEventListener('mouseover', handleCallTimeupdate);
            videoContainerRef.current.addEventListener('mouseout', handleRemoveTimeupdate);
        }

        return () => {
            videoContainerRef.current.removeEventListener('mouseover', handleDuration);
            videoContainerRef.current.removeEventListener('mouseout', handleDuration);
        };
    }, [duration]);

    const handleCallTimeupdate = () => {
        videoRef.current.addEventListener('timeupdate', handleDuration);
    };

    const handleRemoveTimeupdate = () => {
        videoRef.current.removeEventListener('timeupdate', handleDuration);
    };

    const handleDuration = () => {
        const currentTime = videoRef.current.currentTime;
        const percent = currentTime / timePercent;
        setProcess(percent);
        setCurrentTime(formatDuration(currentTime));
    };

    const timePercent = useMemo(() => {
        return duration / 100;
    }, [duration]);

    const handleChangeProcess = (value) => {
        const currentTime = timePercent * value;
        videoRef.current.currentTime = currentTime;
        setCurrentTime(formatDuration(currentTime));
        setProcess(value);
    };

    const handleToggleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen();
            setIsFullScreen(false)
        } else {
            videoContainerRef.current.requestFullscreen();
            setIsFullScreen(true)
        }
    }

    return (
        <div className="lt-video__controls">
            <div className="lt-video__thumbnail-img"></div>
            <div className="lt-video__process">
                {/* <div className="lt-video__timeline">
            <div className="lt-video__preview-img"></div>
            <div className="lt-video__thumb-indicator"></div>
        </div> */}
                <Range step='any' value={process} onChange={handleChangeProcess} />
            </div>
            <div className="lt-video__actions">
                <div className="lt-video__buttons">
                    <Tooltip tooltip="Tạm dừng" flow="up">
                        <div className="lt-video__button lt-video__button--pause-icon" onClick={handleTogglePlay}>
                            <TogglePlayIcon isPlay={isPlay} />
                        </div>
                    </Tooltip>
                    <Tooltip tooltip="Tiếp theo" flow="up">
                        <div className="lt-video__button lt-video__button--skip-next-icon">
                            <SkipNextIcon />
                        </div>
                    </Tooltip>
                    <div className="lt-video__volume">
                        <Tooltip tooltip="Tắt tiếng" flow="up">
                            <div className="lt-video__button lt-video__button--volume-icon" onClick={handleToggleMuted}>
                                <VolumeIcon volumeLevel={volumeLevel} />
                            </div>
                        </Tooltip>
                        <div className="lt-video__volume__range">
                            <Range value={volume} onChange={handleChangeVolume} />
                        </div>
                    </div>
                    <div className="lt-video__duration">
                        <span className="lt-video__current-time">{currentTime}</span>
                        <span className='lt-video__separator'> / </span>
                        <span className="lt-video__total-time">{totalTime}</span>
                    </div>
                </div>
                <div className="lt-video__buttons">
                    <Tooltip tooltip="Trình phát thu nhỏ" flow="up">
                        <div
                            className="lt-video__button lt-video__button--videos-icon"
                            onClick={handleClickTheaterMode}
                        >
                            <VideosIcon />
                        </div>
                    </Tooltip>
                    <Tooltip tooltip="Chế độ rạp chiếu phim" flow="up">
                        <div className="lt-video__button lt-video__button--rectangle-icon">
                            <RectangleIcon />
                        </div>
                    </Tooltip>
                    <Tooltip tooltip="Toàn màn hình" flow="up">
                        <div className="lt-video__button lt-video__button--screen-icon" onClick={handleToggleFullScreen}>
                            <FullscreenIcon />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

Controls.propTypes = {};

const TogglePlayIcon = memo(({ isPlay }) => {
    useWhyDidYouUpdate('TogglePlayIcon', { isPlay });
    return isPlay ? <PauseIcon /> : <PlayIcon />;
});

const VolumeIcon = memo(({ volumeLevel }) => {
    useWhyDidYouUpdate('VolumeIcon', { volumeLevel });

    switch (volumeLevel) {
        case VIDEO_VOLUME.muted:
            return <VolumeMuteIcon />;
        case VIDEO_VOLUME.low:
            return <VolumeLowIcon />;
        case VIDEO_VOLUME.high:
            return <VolumeFullIcon />;
        default:
            return <VolumeFullIcon />;
    }
});

export default Controls;
