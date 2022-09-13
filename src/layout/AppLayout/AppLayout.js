import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './app-layout.scss';
import Sidebar from '~/components/Sidebar';
import App from '~/components/common/App';
import { AppBody, AppHeader } from '~/components/common/App/App';
import { Outlet } from 'react-router-dom';
import Button from '~/components/common/Button';
import Notepad, { NodepadSectionBody, NotepadLesson, NotepadSection, NotepadSectionHeader } from '~/components/Notepad';

const AppLayout = (props) => {
    const [isOpenNotepad, setIsOpenNotepad] = useState(false);

    const handleOpenNotepad = () => {
        setIsOpenNotepad(true);
    };

    const handleCloseNotepad = () => {
        setIsOpenNotepad(false)
    }
    return (
        <App>
            <AppHeader>
                <Button onClick={handleOpenNotepad}>Ghi chú</Button>
                <Button>Danh sách bài học</Button>
            </AppHeader>
            <AppBody>
                <Outlet />
            </AppBody>

            <Notepad isOpen={isOpenNotepad} onClose={handleCloseNotepad}>
                <NotepadLesson lesson="Lesson 1">
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                </NotepadLesson>
                <NotepadLesson lesson="Lesson 1">
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                    <NotepadSection>
                        <NotepadSectionHeader>Ghi chú 1</NotepadSectionHeader>
                        <NodepadSectionBody>
                            Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở hữu cũ bán, nhóm
                            không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
                        </NodepadSectionBody>
                    </NotepadSection>
                </NotepadLesson>
            </Notepad>
        </App>
    );
};

AppLayout.propTypes = {};

export default AppLayout;
