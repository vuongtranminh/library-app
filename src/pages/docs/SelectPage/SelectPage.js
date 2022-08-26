import React, { useState } from 'react';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import Select from '~/components/common/Select';
import './select-page.scss';

const SelectPage = () => {
    const [value, setValue] = useState('CodePen');
    const items = ['CodePen', 'Dribbble', 'Behance', 'HackerRank', 'StackOverflow', 'FreeCodeCamp'];

    const handleChooseOption = (value) => {
        setValue(value);
    };
    return (
        <Document>
            <DocumentTitle>Select</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>Select</SectionTitle>
                    <SectionBody>
                        <div className="select">
                            <Select items={items} value={value} onChooseOption={handleChooseOption} />
                        </div>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default SelectPage;
