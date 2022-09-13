import React from 'react';
import videos from '~/assets/videos';
import { Video } from '~/components/common/Video';
import { VIDEO_TYPE } from '~/components/common/Video/videoType';
import './test.scss';

const Test = () => {
    const sources = [
        {
            src: videos.video,
            type: VIDEO_TYPE.mp4,
        },
    ];

    return (
        <div className="f-edu">
            <div className="f-edu__video">
                <Video sources={sources} />
            </div>
        </div>
    );
};

export default Test;
