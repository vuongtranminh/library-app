import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import Image from '../common/Image';
import './sidebar.scss';

const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const sideBarRef = useRef(null);

    const classes = cx('sidebar', {
        open: isOpenSidebar,
    });

    const handleToggleSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };
    useEffect(() => {
        sideBarRef.current.addEventListener('mouseover', handleOpenSidebar);
        sideBarRef.current.addEventListener('mouseout', handleCloseSidebar);

        return () => {
            sideBarRef.current.removeEventListener('mouseover', handleOpenSidebar);
            sideBarRef.current.removeEventListener('mouseout', handleCloseSidebar);
        };
    }, []);

    const handleOpenSidebar = () => {
        setIsOpenSidebar(true);
    };

    const handleCloseSidebar = () => {
        setIsOpenSidebar(false);
    };

    return (
        <div className={classes} ref={sideBarRef}>
            <div className="logo-details">
                <i className="bx bxl-c-plus-plus icon"></i>
                <div className="logo_name">CodingLab</div>
                <i
                    className={isOpenSidebar ? 'bx bx-menu-alt-right' : 'bx bx-menu'}
                    id="btn"
                    onClick={handleToggleSidebar}
                ></i>
            </div>
            <ul className="nav-list">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Search..." />
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt"></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-user"></i>
                        <span className="links_name">User</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-chat"></i>
                        <span className="links_name">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-pie-chart-alt-2"></i>
                        <span className="links_name">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-folder"></i>
                        <span className="links_name">File Manager</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cart-alt"></i>
                        <span className="links_name">Order</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-heart"></i>
                        <span className="links_name">Saved</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog"></i>
                        <span className="links_name">Setting</span>
                    </a>
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <img src="profile.jpg" alt="profileImg" />
                        <div className="name_job">
                            <div className="name">Prem Shahi</div>
                            <div className="job">Web designer</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"></i>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
