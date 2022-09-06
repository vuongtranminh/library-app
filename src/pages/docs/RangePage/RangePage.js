import React, { useState } from 'react';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Range from '~/components/common/Range';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import './range-page.scss';

const RangePage = () => {
    const [value, setValue] = useState(30);

    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <Document>
            <DocumentTitle>Range</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>Range</SectionTitle>
                    <SectionBody>
                        <div className="range">
                            <Range value={value} onChange={handleChange} />
                        </div>

                        <p>Value: {value}</p>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default RangePage;
