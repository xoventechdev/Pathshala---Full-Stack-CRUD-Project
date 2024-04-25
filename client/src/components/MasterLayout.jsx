import React from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import SideBar from './Shared/SideBar';

const MasterLayout = (props) => {
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;