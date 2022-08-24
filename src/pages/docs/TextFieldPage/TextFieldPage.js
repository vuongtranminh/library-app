import React, { useMemo, useRef, useState } from 'react';
import Button from '~/components/common/Button';
import Document, { DocumentBody, DocumentTitle } from '~/components/common/Document';
import Grid from '~/components/common/Grid';
import Input from '~/components/common/Input/Input';
import Section, { SectionBody, SectionTitle } from '~/components/common/Section';
import './text-field-page.scss';

const TextFieldPage = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const usernameRef = useRef();
    const passwordRef = useRef();

    const usernameRules = useMemo(() => {
        return [(value) => !!value || 'EnterUsenameMsg'];
    }, []);

    const passwordRules = useMemo(() => {
        return [(value) => !!value || 'EnterPwMsg'];
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!usernameRef.current.validate() && !passwordRef.current.validate()) {
            return;
        }
        alert(JSON.stringify(user));
    };

    return (
        <Document>
            <DocumentTitle>TextField</DocumentTitle>
            <DocumentBody>
                <Section>
                    <SectionTitle>TextField</SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={1} smCol={1} gap={20}>
                            <div className="input">
                                <Input label="Regular" />
                            </div>
                            <div className="input">
                                <Input label="Regular" regular effect={1} />
                            </div>
                            <div className="input">
                                <Input label="Regular" regular effect={2} />
                            </div>
                            <div className="input">
                                <Input label="Regular" regular effect={3} />
                            </div>

                            <div className="input">
                                <Input label="Border" border />
                            </div>
                            <div className="input">
                                <Input label="Border" border effect={1} />
                            </div>
                            <div className="input">
                                <Input label="Border" border effect={2} />
                            </div>
                            <div className="input">
                                <Input label="Border" border effect={3} />
                            </div>

                            <div className="input">
                                <Input label="Filled" filled />
                            </div>
                            <div className="input">
                                <Input label="Filled" filled effect={2} />
                            </div>
                            <div className="input">
                                <Input label="Filled" filled effect={3} />
                            </div>
                            <div className="input">
                                <Input label="Filled" filled effect={4} />
                            </div>
                        </Grid>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Form</SectionTitle>
                    <SectionBody>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input">
                                <Input
                                    border
                                    ref={usernameRef}
                                    label="Username"
                                    name="username"
                                    rules={usernameRules}
                                    onChange={handleChange}
                                    value={user.username}
                                />
                            </div>
                            <div className="input">
                                <Input
                                    border
                                    ref={passwordRef}
                                    label="Password"
                                    name="password"
                                    rules={passwordRules}
                                    onChange={handleChange}
                                    value={user.password}
                                />
                            </div>
                            <div className="button">
                                <Button variant="contained" size="medium">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </SectionBody>
                </Section>
            </DocumentBody>
        </Document>
    );
};

export default TextFieldPage;
