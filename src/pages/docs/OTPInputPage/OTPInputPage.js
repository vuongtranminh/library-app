import React from 'react';
import Digit from '~/components/common/Digit';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import './otp-input-page.scss';

const OTPInputPage = () => {
    return (
        <Document>
            <DocumentTitle>OTPInput</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>OTPInput</SectionTitle>
                    <SectionBody>
                        <div className="otp-input">
                            {[...Array(9)].map((item, index) => (
                                <Digit key={index} index={index} />
                            ))}
                        </div>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default OTPInputPage;
