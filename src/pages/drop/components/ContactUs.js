import React, { useState } from "react";
import "./ContactUs.css";
import Footer from "../../footer/components/Footer";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

	const isFormValid = name !== "" && email !== "" && message !== "";

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			// Perform your submit logic here
		}
	};

	return (
		<div className="main-container">
			<div className="contact-us">
			<h1 className="section-title">Contact Us</h1>
			<div className="contact-form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
					</div>

					<div className="auth-buttons">
						<button>Login</button>
						<button>Sign Up</button>
						<button type="submit" disabled={!isFormValid}>
							Send
						</button>
					</div>
				</form>
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default ContactUs;
