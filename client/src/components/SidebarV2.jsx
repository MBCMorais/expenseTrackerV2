import React,{useState} from 'react';
import './sidebarcssv2.css';
import { Link } from 'react-router-dom';

const SidebarV2 = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<section className={show ? 'space-toggle' : null}>
				<header className={`header ${show ? 'space-toggle' : null}`}>
					<div className='header-toggle' onClick={() => setShow(!show)}>
                        <button>icon bars</button>
                    </div>
				</header>
				<aside className={`sidebar ${show ? 'show' : null}`}>
					<nav className='nav'>
						<div>
							<Link to='/' className='nav-logo'>
								<i className={`fas fa-home-alt nav-logo-icon`}></i>
								<span className='nav-logo-name'>Homepage</span>
							</Link>

							<div className='nav-list'>
								<Link to='/dashboard' className='nav-link active'>
									<i className='fas fa-tachometer-alt nav-link-icon'></i>
									<span className='nav-link-name'>Dashboard</span>
								</Link>
								<Link to='/hotel' className='nav-link'>
									<i className='fas fa-hotel nav-link-icon'></i>
									<span className='nav-link-name'>Hotel</span>
								</Link>
								<Link to='/gallery' className='nav-link'>
									<i className='fas fa-image nav-link-icon'></i>
									<span className='nav-link-name'>Gallery</span>
								</Link>
								<Link to='/gallery' className='nav-link'>
									<i className='fas fa-dollar-sign nav-link-icon'></i>
									<span className='nav-link-name'>Transaction</span>
								</Link>
							</div>
						</div>

						<Link to='/logout' className='nav-link'>
							<i className='fas fa-sign-out nav-link-icon'></i>
							<span className='nav-link-name'>Logout</span>
						</Link>
					</nav>
				</aside>
			</section>
		</div>
	);
};

export default SidebarV2;
