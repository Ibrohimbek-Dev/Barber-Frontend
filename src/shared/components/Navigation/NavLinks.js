import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import { useHttpClient } from ".././../../shared/hooks/http-hook";

import "./NavLinks.css";
import { useAuth } from "../../hooks/auth-hook";

const NavLinks = ({ onLinkClick }) => {
	const auth = useContext(AuthContext);

	const [showLinks, setShowLinks] = useState(false);
	const [showLogout, setShowLogout] = useState(false);
	const [userImage, setUserImage] = useState(); // Initialize with user's image
	const { sendRequest } = useHttpClient();

	let logoutTimeout;

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const toggleLogout = () => {
		setShowLogout(true);
		clearTimeout(logoutTimeout);
		logoutTimeout = setTimeout(() => {
			setShowLogout(false);
		}, 5000);
	};

	const hideLinks = () => {
		setShowLinks(false);
		setShowLogout(false);
		clearTimeout(logoutTimeout);		
	};

	const { userId } = useAuth();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const responseData = await sendRequest(
					process.env.REACT_APP_BACKEND_URL + "/users"
				);

				const user = await responseData.users.find(
					(user) => user.id === userId
				);
				if (user.image) {
					setUserImage(user.image);
				}
			} catch (err) {
				// Handle errors
			}
		};

		if (auth.isLoggedIn) {
			fetchUserData();
		}
	}, [auth.isLoggedIn, setUserImage, sendRequest, userImage, userId]);

	let imageURL = `${process.env.REACT_APP_ASSET_URL}/${userImage}`;

	return (
		<React.Fragment>
			<ul className="nav-links">
				<li>
					<NavLink to="/home" exact onClick={onLinkClick}>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink to="/services" exact onClick={onLinkClick}>
						SERVICES
					</NavLink>
				</li>
				<li>
					<NavLink to="/barbers" exact onClick={onLinkClick}>
						BARBERS
					</NavLink>
				</li>
				<li>
					<NavLink to="/gallery" exact onClick={onLinkClick}>
						GALLERY
					</NavLink>
				</li>

				<div
					className={`dropdown ${showLinks ? "show" : ""}`}
					onMouseEnter={toggleLinks}
					// onMouseLeave={hideLinks}
				>
					<div
						className="dropdown-toggle navbar-links__a-link"
						onClick={toggleLinks}
					>
						Other Options
					</div>
					<div className={`dropdown-menu ${showLinks ? "show" : ""}`}>
						<NavLink
							to="/contact"
							className="navbar-links__a-link"
							exact
							onClick={onLinkClick}
						>
							CONTACT US
						</NavLink>
						<div className="divider" />
						<NavLink
							to="/locations"
							className="navbar-links__a-link"
							exact
							onClick={onLinkClick}
						>
							LOCATIONS
						</NavLink>
						<div className="divider" />
						<NavLink
							to="/prices"
							className="navbar-links__a-link"
							exact
							onClick={onLinkClick}
						>
							PRICE
						</NavLink>
						<div className="divider" />
						<NavLink
							to="/auth"
							className="navbar-links__a-link"
							exact
							onClick={onLinkClick}
						>
							AUTHENTICATION
						</NavLink>
						<div className="divider" />
					</div>
				</div>

				{auth.isLoggedIn && userImage ? (
					<div
						className={`user-image-dropdown ${showLogout ? "show-logout" : ""}`}
						onMouseEnter={toggleLogout}
						// onMouseLeave={hideLinks}
					>
						<img
							src={`${imageURL}`}
							alt="user"
							className={`user-image ${showLogout ? "show-logout" : ""}`}
						/>
						{showLogout && (
							<div className="logout-dropdown">
								<NavLink
									to="/auth"
									className="logout-dropdown-item"
									onClick={auth.logout}
								>
									Log Out
								</NavLink>
							</div>
						)}
					</div>
				) : (
					<NavLink
						to="/auth"
						className="navbar-links__a-link"
						exact
						onClick={onLinkClick}
					>
						AUTH
					</NavLink>
				)}
			</ul>
		</React.Fragment>
	);
};

export default NavLinks;
