import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useWhyDidYouUpdate } from '~/hooks';

const Player = forwardRef(({ sources, ...props }, ref) => {
    useWhyDidYouUpdate('Player', { sources });
    return (
        <video ref={ref} className="lt-video__player" {...props} muted loop>
            {sources.map((source, index) => (
                <source key={index} src={source.src} type={source.type} />
            ))}
        </video>
    );
});

Player.propTypes = {
    sources: PropTypes.array.isRequired,
};

export default Player;
