import React from 'react';
import Button, { EndIcon, StartIcon } from '~/components/common/Button';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Grid from '~/components/common/Grid';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import './button-page.scss';

const ButtonPage = () => {
    const handleClick = () => {
        alert('Click button!');
    };

    return (
        <Document>
            <DocumentTitle>Button</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>Button</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={1} smCol={1} gap={20}>
                            <div className="button--default">
                                <div className="button">
                                    <Button>Default</Button>
                                </div>
                                <div className="button">
                                    <Button variant="contained">Contained</Button>
                                </div>
                                <div className="button">
                                    <Button variant="text">Text</Button>
                                </div>
                                <div className="button">
                                    <Button variant="outlined">Outlined</Button>
                                </div>
                            </div>
                            <div className="button--small">
                                <div className="button">
                                    <Button size="small">Default</Button>
                                </div>
                                <div className="button">
                                    <Button variant="contained" size="small">
                                        Contained
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="text" size="small">
                                        Text
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="outlined" size="small">
                                        Outlined
                                    </Button>
                                </div>
                            </div>
                            <div className="button--medium">
                                <div className="button">
                                    <Button size="medium">Default</Button>
                                </div>
                                <div className="button">
                                    <Button variant="contained" size="medium">
                                        Contained
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="text" size="medium">
                                        Text
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="outlined" size="medium">
                                        Outlined
                                    </Button>
                                </div>
                            </div>
                            <div className="button--large">
                                <div className="button">
                                    <Button size="large">Default</Button>
                                </div>
                                <div className="button">
                                    <Button variant="contained" size="large">
                                        Contained
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="text" size="large">
                                        Text
                                    </Button>
                                </div>
                                <div className="button">
                                    <Button variant="outlined" size="large">
                                        Outlined
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Button Event</SectionTitle>
                    <SectionBody>
                        <div className="button">
                            <Button variant="contained" size="medium" onClick={handleClick}>
                                Default type!
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" onClick={handleClick} type="button">
                                Button
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" onClick={handleClick} type="submit">
                                Submit
                            </Button>
                        </div>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Button Custom</SectionTitle>
                    <SectionBody>
                        <div className="button">
                            <Button
                                variant="contained"
                                size="medium"
                                className="button-custom"
                                style={{ backgroundColor: 'red' }}
                            >
                                Custom button
                            </Button>
                        </div>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Button With Icon</SectionTitle>
                    <SectionBody>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                <StartIcon>
                                    <i className="bx bx-leaf"></i>
                                </StartIcon>
                                Start icon
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                End icon
                                <EndIcon>
                                    <i className="bx bx-leaf"></i>
                                </EndIcon>
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                <StartIcon>
                                    <i className="bx bx-leaf"></i>
                                </StartIcon>
                                All icon
                                <EndIcon>
                                    <i className="bx bx-leaf"></i>
                                </EndIcon>
                            </Button>
                        </div>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Button With Icon Custom</SectionTitle>
                    <SectionBody>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                <StartIcon className="start-icon-custom" style={{ color: 'red' }}>
                                    <i className="bx bx-leaf"></i>
                                </StartIcon>
                                Start icon
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                End icon
                                <EndIcon className="end-icon-custom" style={{ color: 'yellow' }}>
                                    <i className="bx bx-leaf"></i>
                                </EndIcon>
                            </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" size="medium" className="button-custom">
                                <StartIcon className="start-icon-custom" style={{ color: 'yellow' }}>
                                    <i className="bx bx-leaf"></i>
                                </StartIcon>
                                <span style={{ color: 'pink' }}>All icon</span>
                                <EndIcon className="end-icon-custom" style={{ color: 'red' }}>
                                    <i className="bx bx-leaf"></i>
                                </EndIcon>
                            </Button>
                        </div>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default ButtonPage;
