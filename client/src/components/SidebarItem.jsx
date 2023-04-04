import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const SidebarItem = ({ item }) => {
	const [open, setOpen] = useState(false);

	if (item.childrens) {
		return (
			<div className={open ? 'sidebar-item open' : 'sidebar-item'}>
				<div className='sidebar-title'>
					<span>
						{item.icon && <i className={item.icon}></i>}
						{item.title}
					</span>
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setOpen(!open)}/>
                </div>
                
				<div className='sidebar-content'>
					{item.childrens.map((child, index) => (
						<SidebarItem key={index} item={child} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<a href={item.path || '#'} className='sidebar-item plain'>
				{item.icon && <i className={item.icon}></i>}
				{item.title}
			</a>
		);
	}
};

export default SidebarItem;
