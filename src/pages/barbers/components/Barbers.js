// Barbers.js
import React from "react";
import barber1 from "../images/barber1.jpg";
import barber2 from "../images/barber2.jpg";
import barber3 from "../images/barber3.jpg";
import barber4 from "../images/barber4.jpg";
import barber5 from "../images/barber5.jpg";
import barber6 from "../images/barber6.jpg";
import "./Barbers.css"; // Import your CSS if needed
import Footer from "../../footer/components/Footer";

const barbersData = [
	{
		name: "David",
		image: barber1,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
	{
		name: "David",
		image: barber2,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
	{
		name: "Danel",
		image: barber3,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
	{
		name: "Arthur",
		image: barber4,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
	{
		name: "Khan",
		image: barber5,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
	{
		name: "Micheal",
		image: barber6,
		instagram: "https://www.instagram.com/barber1/",
		telegram: "https://t.me/barber1/",
		facebook: "https://www.facebook.com/barber1/",
	},
];

const Barbers = () => {
	return (
		<div className="main-container">
			<div className="barbers-container container">
				<h1 className="section-title">Meet Our Barbers</h1>
				<div className="barbers">
					{barbersData.map((barber, index) => (
						<div className="barber-card" key={index}>
							<img src={barber.image} alt={`Barber ${index + 1}`} />
							<h3 className="barber-name">{barber.name}</h3>
							<div className="social-links">
								<a
									href={barber.instagram}
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
								<a
									href={barber.telegram}
									target="_blank"
									rel="noopener noreferrer"
								>
									Telegram
								</a>
								<a
									href={barber.facebook}
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
							</div>
						</div>
					))}
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default Barbers;
