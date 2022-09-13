import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from '../common/Select';
import Input from '../common/Input';
import './notepad.scss';
import cx from 'classnames';

const Notepad = ({ children, isOpen, onClose }) => {
    const [lessonFilter, setLessonFilter] = useState({
        text: 'Trong chương hiện tại',
        value: 'lesson',
    });
    const [sortFilter, setSortFilter] = useState({
        text: 'Mới nhất',
        value: 'latest',
    });

    const lessonFilters = [
        {
            text: 'Trong chương hiện tại',
            value: 'lesson',
        },
        {
            text: 'Trong tất cả các chương',
            value: 'all',
        },
    ];

    const sortFilters = [
        {
            text: 'Mới nhất',
            value: 'latest',
        },
        {
            text: 'Cũ nhất',
            value: 'oldest',
        },
    ];

    const handleLessonFilter = (value) => {
        setLessonFilter(value);
    };

    const handleSortFilter = (value) => {
        setSortFilter(value);
    };

    const classes = cx('notepad', {
        'notepad--open': isOpen,
    });

    const handleCloseNotepad = () => {
        onClose()
    }

    return (
        <div className={classes}>
            <div className="notepad__container">
                <div className="notepad__close" onClick={handleCloseNotepad}>
                    <i className="bx bx-x"></i>
                </div>
                <header className="notepad__header">
                    <div className="notepad__title">Notepad</div>
                    <div className="notepad__search">
                        <Input label="Border" border />
                    </div>
                    <div className="notepad__filter">
                        <Select
                            items={lessonFilters}
                            value={lessonFilter}
                            itemText="text"
                            onChooseOption={handleLessonFilter}
                        />
                    </div>
                    <div className="notepad__filter">
                        <Select
                            items={sortFilters}
                            value={sortFilter}
                            itemText="text"
                            onChooseOption={handleSortFilter}
                        />
                    </div>
                </header>
                <div className="notepad__body">{children}</div>
            </div>
        </div>
    );
};

export const NotepadLesson = (props) => {
    return (
        <div className="notepad__lesson">
            <header className="notepad__lesson__header">{props.lesson}</header>
            <div className="notepad__lesson__body">{props.children}</div>
            <footer className="notepad__lesson__footer">/*--------*/</footer>
        </div>
    );
};

export const NotepadSection = (props) => {
    return <div className="notepad__section">{props.children}</div>;
};

export const NotepadSectionHeader = (props) => {
    return (
        <header className="notepad__section__header">
            <div className="notepad__section__title">{props.children}</div>
            <div className="notepad__section__actions">
                <div className="notepad__section__btn">
                    <i className="bx bxs-pencil"></i>
                </div>
                <div className="notepad__section__btn">
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </header>
    );
};

export const NodepadSectionBody = (props) => {
    return <div className="notepad__section__body">{props.children}</div>;
};

Notepad.propTypes = {};

export default Notepad;
