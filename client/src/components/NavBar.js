import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
} from 'cdbreact';


function NavBar(props)  {

    return (
        <><div className="bg-dark text-secondary px-1 py-2 text-start">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">My Applications</h1>
            </div>
        </div><div className="row">
                <div className="col-2">
                    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader>
                                <a href="/" className="text-decoration-none" style={{ color: 'inherit' }} onClick={() => props.handlePageChange('Home')}>
                                    Home
                                </a>
                            </CDBSidebarHeader>
                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/active"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Active')}
                                            className={props.currentPage === 'Active' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            All Applications
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/interviews"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Interviews')}
                                            className={props.currentPage === 'Interviews' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Interviews
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/rejections"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Rejections')}
                                            className={props.currentPage === 'Rejections' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Rejections
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/inactive"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Inactive')}
                                            className={props.currentPage === 'Inactive' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Inactive
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/Login"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Login')}
                                            className={props.currentPage === 'Login' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="/Signup"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Signup')}
                                            className={props.currentPage === 'Signup' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Signup
                                        </a>
                                    </li>





                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        padding: '20px 5px',
                                    }}
                                >
                                    
                                    <a
                                            href="#Logout"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => props.handlePageChange('Logout')}
                                            className={props.currentPage === 'Logout' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Logout
                                        </a>
                                </div>
                            </CDBSidebarFooter>
                        </CDBSidebar>
                    </div>
                </div>
                <div className="col-9">
                    <div id="content align-self-end">

                        {props.children}

                    </div>

                </div>

            </div></>



    );
}

export default NavBar;

