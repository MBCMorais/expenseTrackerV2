import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


const SidebarData = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHome} />,
		link: '/home',
	},
	{
		title: 'About',
		icon: <FontAwesomeIcon icon={faHome} />,
		link: '/about',
	},
	{
		title: 'Contact',
		icon: <FontAwesomeIcon icon={faHome} />,
		link: '/contact',
	},
    
];

export default SidebarData;
