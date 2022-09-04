import React from 'react'
import PropTypes from 'prop-types'
import './media-page.scss'
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document'
import Section, { SectionBody, SectionTitle } from '~/components/common/Section'
import { Video } from '~/components/common/Video'

const MediaPage = props => {
    return <Document>
        <DocumentTitle>Media</DocumentTitle>
        <DocumentBody>
            <Section>
                <SectionTitle>Video</SectionTitle>
                <SectionBody>
                    <div className="video">
                        <Video />
                    </div>
                </SectionBody>
            </Section>
        </DocumentBody>
    </Document>
}

MediaPage.propTypes = {}

export default MediaPage