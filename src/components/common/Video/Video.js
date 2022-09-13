import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';
import './video.scss';
import Player from './Player';
import Controls from './Controls';

const Video = ({ sources, autoPlay = true, ...props }) => {
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null)
    return (
        <div className="lt-video" ref={videoContainerRef}>
            <Controls videoContainerRef={videoContainerRef} videoRef={videoRef} autoPlay={autoPlay} />
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
