import React from 'react';
import MySidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import Footer from '../components/Footer';
import SidebarV2 from '../components/SidebarV2';


const Layout = () => {
	return (
		<>
			<div className='vh-100 vw-100'>
                
				<div className='p-0 d-flex'>
					<Col md={3} >
                    <MySidebar />
                        {/* <SidebarV2 /> */}
					</Col>
					<Col md={9}>
						<Outlet />
					</Col>
				</div>
                <Footer/>
			</div>
           
		</>
	);
};

export default Layout;
