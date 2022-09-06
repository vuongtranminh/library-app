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
import { VIDEO_VOLUME } from './videoType';
import cx from 'classnames';
import Range from '../Range';

const Video = ({ sources, autoPlay = true, ...props }) => {
    const videoRef = useRef(null);

    const [isPlay, setIsPlay] = useState(autoPlay);
    const [isMuted, setIsMuted] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(VIDEO_VOLUME.high);
    const [volume, setVolume] = useState(50);

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

    const handleMuted = () => {
        videoRef.current.muted = true;
    };

    const handleToggleMuted = () => {
        videoRef.current.muted = !videoRef.current.muted;
    };

    useEffect(() => {
        handlePlay();
        videoRef.current.volume = volume / 100
    }, []);

    const handleChangeVolume = (value) => {
        const volume = value / 100
        if (videoRef.current.muted && value > 0) {
            videoRef.current.muted = false
        }
        videoRef.current.volume = volume
        setVolume(value)
    };

    useEffect(() => {
        videoRef.current.addEventListener("volumechange", () => {
            let volumeLevel
            if (videoRef.current.muted || videoRef.current.volume === 0) {
                setVolume(0)
                volumeLevel = "muted"
            } else if (videoRef.current.volume >= 0.5) {
                volumeLevel = "high"
            } else {
                volumeLevel = "low"
            }
            setVolumeLevel(volumeLevel)
        })
    }, [])

    return (
        <div className="lt-video">
            <div className="lt-video__controls">
                <div className="lt-video__thumbnail-img"></div>
                <div className="lt-video__process">
                    <div className="lt-video__timeline">
                        <div className="lt-video__preview-img"></div>
                        <div className="lt-video__thumb-indicator"></div>
                    </div>
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
                            <div className="lt-video__button lt-video__button--videos-icon">
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

            <video
                ref={videoRef}
                className="lt-video__player"
                {...props}
                muted
                loop
            >
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
