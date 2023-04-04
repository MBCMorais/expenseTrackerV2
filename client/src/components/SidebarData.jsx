import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHome} />,
		path: '/home',
	},
	{
		title: 'Expense',
		icon: <FontAwesomeIcon icon={faHome} />,
		childrens: [
			{
				title: 'List Expense',
				icon: <FontAwesomeIcon icon={faHome} />,
				path: '/expense',
			},
			{
				title: 'Edit Expense',
				icon: <FontAwesomeIcon icon={faHome} />,
				path: '/expense/:expense_id/edit',
			},
		],
	},
	{
		title: 'Income',
		icon: <FontAwesomeIcon icon={faHome} />,
		childrens: [
			{
				title: 'List Income',
				icon: <FontAwesomeIcon icon={faHome} />,
				path: '/income',
			},
			{
				title: 'Edit Income',
				icon: <FontAwesomeIcon icon={faHome} />,
				path: '/income/:income_id/edit',
			},
		],
	},

	{
		title: 'Calendar',
		icon: <FontAwesomeIcon icon={faHome} />,
		path: '/calendar',
	},
	{
		title: 'Settings',
		icon: <FontAwesomeIcon icon={faHome} />,
		path: '/settings',
	},
];

export default SidebarData;
