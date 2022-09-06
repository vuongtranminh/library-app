import React from 'react';
import PropTypes from 'prop-types';
import './media-page.scss';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import { Video } from '~/components/common/Video';
import videos from '~/assets/videos';
import { VIDEO_TYPE } from '~/components/common/Video/videoType';

const MediaPage = (props) => {
    const sources = [
        {
            src: videos.video,
            type: VIDEO_TYPE.mp4,
        },
    ];

    return (
        <Document>
            <DocumentTitle>Media</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>Video</SectionTitle>
                    <SectionBody>
                        <div className="video">
                            <Video sources={sources} />
                        </div>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

MediaPage.propTypes = {};

export default MediaPage;
