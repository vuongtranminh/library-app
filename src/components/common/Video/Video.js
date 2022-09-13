import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './video.scss';
import Player from './Player';
import Controls from './Controls';
import cx from 'classnames';

const Video = ({ sources, autoPlay = true, ...props }) => {
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null)
    const [isPlay, setIsPlay] = useState(autoPlay);

    const handleTogglePlay = () => {
        isPlay ? handlePause() : handlePlay();
    };

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlay(true)
    };

    const handlePause = () => {
        videoRef.current.pause();
        setIsPlay(false)
    };

    const overlayClass = cx('lt-video__overlay', {
        'lt-video__overlay--play': isPlay
    })

    return (
        <div className="lt-video" ref={videoContainerRef}>
            <div className={overlayClass} onClick={handleTogglePlay}>
            </div>
            <Controls videoContainerRef={videoContainerRef} videoRef={videoRef} onTogglePlay={handleTogglePlay} isPlay={isPlay} onPlay={handlePlay} />
            <MemoPlayer ref={videoRef} sources={sources} />
        </div>
    );
};

const MemoPlayer = memo(Player);

Video.propTypes = {
    sources: PropTypes.array.isRequired,
    autoplay: PropTypes.bool,
};

export default Video;
