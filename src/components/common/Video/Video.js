import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './video.scss';
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
import cx from 'classnames';
import Range from '../Range';

const Video = ({ sources, autoPlay = true, ...props }) => {
    const videoRef = useRef(null);

    const [isPlay, setIsPlay] = useState(autoPlay);
    const [volumeLevel, setVolumeLevel] = useState(VIDEO_VOLUME.high);
    const [volume, setVolume] = useState(50);
    const [volumeBeforeMuted, setVolumeBeforeMuted] = useState(50);
    const [duration, setDuration] = useState(0)
    const [process, setProcess] = useState(0)

    const handleTogglePlay = () => {
        isPlay ? handlePause() : handlePlay();
        setIsPlay(!isPlay);
    };

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

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
        videoRef.current.addEventListener('loadedmetadata', () => {
            handlePlay();
            videoRef.current.volume = volume / 100;
            console.log(videoRef.current.duration)
            setDuration(videoRef.current.duration)
        })
        return () => videoRef.current.removeEventListener('loadedmetadata', null)
    }, []);

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
        videoRef.current.addEventListener('mouseover', handleDuration)
        return () => videoRef.current.removeEventListener('mouseover', handleDuration)
    }, [duration])

    const handleDuration = () => {
        const percent = Math.floor(videoRef.current.currentTime / timePercent)
        setProcess(percent)
        console.log(percent)
    }

    const timePercent = useMemo(() => {
        return Math.floor(duration / 100)
    }, [duration])

    return (
        <div className="lt-video">
            <div className="lt-video__controls">
                <div className="lt-video__thumbnail-img"></div>
                <div className="lt-video__process">
                    {/* <div className="lt-video__timeline">
                        <div className="lt-video__preview-img"></div>
                        <div className="lt-video__thumb-indicator"></div>
                    </div> */}
                    <Range value={process} onChange={handleChangeVolume} />
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
                                <div
                                    className="lt-video__button lt-video__button--volume-icon"
                                    onClick={handleToggleMuted}
                                >
                                    <VolumeIcon volumeLevel={volumeLevel} />
                                </div>
                            </Tooltip>
                            <div className="lt-video__volume__range">
                                <Range value={volume} onChange={handleChangeVolume} />
                            </div>
                        </div>
                        <div className="lt-video__duration">
                            <div className="lt-video__current-time">0:00</div>/
                            <div className="lt-video__total-time"></div>
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
                            <div className="lt-video__button lt-video__button--screen-icon">
                                <FullscreenIcon />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <video ref={videoRef} className="lt-video__player" {...props} muted loop>
                {sources.map((source, index) => (
                    <source key={index} src={source.src} type={source.type} />
                ))}
            </video>
        </div>
    );
};

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

Video.propTypes = {
    sources: PropTypes.array.isRequired,
    autoplay: PropTypes.bool,
};

export default Video;
