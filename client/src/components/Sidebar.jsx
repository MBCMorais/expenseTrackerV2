import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

// import '/dist/sidebar-menu.scss'

const MySidebar = () => {
	// const [isOpen, setIsopen] = useState(false);

	// const ToggleSidebar = () => {
	// 	isOpen === true ? setIsopen(false) : setIsopen(true);
	// };

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			{/* <div className='bg-light p-4 Sidebar'>
				<Nav className='flex-column SidebarList'>
					{SidebarData.map((val, key) => {
						return (
							<li key={key}>
								<Nav.Item id={window.location.pathname == val.link ? 'active' : ''}>
									<Nav.Link className='text-dark font-weight-bold d-flex' href={val.link}>
										<div id='icon'>{val.icon}</div>
										<div id='title'>{val.title}</div>
									</Nav.Link>
								</Nav.Item>
							</li>
						);
					})}
				</Nav>
			</div> */}
			<Col md={3}>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items' onClick={showSidebar}>
						<li className='navbar-toggle'>
							<Link to='#' className='menu-bars'>
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className='nav-text'>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</Col>
		</>
	);
};

export default MySidebar;
