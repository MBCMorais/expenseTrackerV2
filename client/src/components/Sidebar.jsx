import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import items from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarItem from "./SidebarItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// import '/dist/sidebar-menu.scss'

const MySidebar = () => {
	// const [isOpen, setIsopen] = useState(false);

	// const ToggleSidebar = () => {
	// 	isOpen === true ? setIsopen(false) : setIsopen(true);
	// };

	// const [sidebar, setSidebar] = useState(false);

	// const showSidebar = () => setSidebar(!sidebar);

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
			{/* <Col md={3}>
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
						<li className='nav-text'>
							<Link to='/home'>
								<FontAwesomeIcon icon={faHome} />
								<span>Home</span>
							</Link>
						</li>
						<li className='nav-text'>
							<a
								href='#pageSubmenu'
								data-toggle='collapse'
								data-target='#homeSubmenu'
								aria-expanded='false'
								aria-label='Toggle navigation'
								className='dropdown-toggle'
							>
								<FontAwesomeIcon icon={faHome} />
								<span>Expense</span>
							</a>
							<ul className='collapse list-unstyled' id='homeSubmenu'>
								<li>
									<a href='#'>Home 1</a>
								</li>
								<li>
									<a href='#'>Home 2</a>
								</li>
								<li>
									<a href='#'>Home 3</a>
								</li>
							</ul>
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
			</Col> */}
			<div className='sidebar'>
				{items.map((item, index) => (
					<SidebarItem key={index} item={item} />
				))}
			</div>
		</>
	);
};

export default MySidebar;
