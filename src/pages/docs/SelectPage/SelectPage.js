import React, { useState } from 'react';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import Select from '~/components/common/Select';
import './select-page.scss';

const SelectPage = () => {
    const [value, setValue] = useState('HackerRank');
    const items = ['CodePen', 'Dribbble', 'Behance', 'HackerRank', 'StackOverflow', 'FreeCodeCamp'];

    const [objectValue, setObjectValue] = useState({
        text: 'HackerRank',
        value: 4,
    });
    const itemsObject = [
        {
            text: 'CodePen',
            value: 1,
        },
        {
            text: 'Dribbble',
            value: 2,
        },
        {
            text: 'Behance',
            value: 3,
        },
        {
            text: 'HackerRank',
            value: 4,
        },
        {
            text: 'StackOverflow',
            value: 5,
        },
        {
            text: 'FreeCodeCamp',
            value: 6,
        },
    ]

    const handleChooseOption = (value) => {
        setValue(value);
    };

    const handleChooseOptionObject = (value) => {
        setObjectValue(value);
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

                        <p>Your Choose: {value}</p>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>Select Object</SectionTitle>
                    <SectionBody>
                        <div className="select">
                            <Select items={itemsObject} value={objectValue} itemText='text' onChooseOption={handleChooseOptionObject} />
                        </div>

                        <p>Your Choose: {JSON.stringify(objectValue)}</p>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default SelectPage;
