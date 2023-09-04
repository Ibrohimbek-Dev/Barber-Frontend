import React from "react";
import "./Footer.css"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-copyright">
					&copy; {new Date().getFullYear()} Your Company Name. All rights
					reserved.
				</div>
				<div className="footer-location">
					<p>123 Main Street, City</p>
					<p>Country</p>
				</div>
				<div className="footer-social-links">
					<a
						href="https://www.facebook.com/yourcompany"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
					<a
						href="https://twitter.com/yourcompany"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					<a
						href="https://www.instagram.com/yourcompany"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
