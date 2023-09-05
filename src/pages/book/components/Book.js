import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";

import "./Book.css";
import Footer from "../../footer/components/Footer";
const Book = () => {
	const [selectedTime, setSelectedTime] = useState(""); // State to store selected time
	const [customTime, setCustomTime] = useState(""); // State to store custom time input
	
	const navigate = useNavigate()
	const auth = useContext(AuthContext);

	const availableTimes = [
		"10:00 AM",
		"11:00 AM",
		"2:00 PM",
		// ... add more available times
	];

	const waitingClients = 5; // Example number of waiting clients
	const availableChairs = 2; // Example number of available chairs

	const handleCustomTimeChange = (event) => {
		setCustomTime(event.target.value);
	};

	const handleBookAppointment = () => {
		// Handle booking appointment logic here
		// You can use selectedTime or customTime as needed

		if (auth.isLoggedIn) {
			alert("book section is coming soon!");
		} else {
			navigate("/auth")
		}
	};

	const elements = (
		<div className="main-container">
			<div className="book-container">
				<h1 className="section-title">Book Your Appointment</h1>
				<div className="container">
					<div className="booking-options">
						<div className="time-options">
							<h2>Available Times:</h2>
							<ul>
								{availableTimes.map((time, index) => (
									<li
										key={index}
										className={selectedTime === time ? "selected" : ""}
										onClick={() => setSelectedTime(time)}
									>
										{time}
									</li>
								))}
							</ul>
							<input
								type="text"
								placeholder="Enter custom time"
								value={customTime}
								onChange={handleCustomTimeChange}
							/>
							<button
								className="custom-time-button"
								onClick={() => setSelectedTime(customTime)}
							>
								Set Custom Time
							</button>
						</div>
						<div className="waiting-info">
							<h2>Waiting List:</h2>
							<p>{waitingClients} clients are currently waiting.</p>
						</div>
						<div className="chair-availability">
							<h2>Chair Availability:</h2>
							<p>
								<span>{availableChairs}</span> chairs are available.
							</p>
						</div>
					</div>
					

					<button
						className="book-appointment-button"
						onClick={handleBookAppointment}
					>
						Book Appointment
					</button>
				</div>
			</div>
			<Footer/>
		</div>
	);

	return auth.isLoggedIn ? elements : navigate("/auth")
};

export default Book;
