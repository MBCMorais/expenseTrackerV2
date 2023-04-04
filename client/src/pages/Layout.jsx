import React from 'react';
import MySidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';


const Layout = () => {
	return (
		<>
			<div id='responsiveTablet' className='vh-100 vw-100 p-0 d-flex '>
				<Col md={3} xl={2}>
					<MySidebar />
				</Col>
				<Col md={9} xl={10}>
					<Outlet />
					<Footer />
				</Col>
			</div>
		</>
	);
};

export default Layout;
