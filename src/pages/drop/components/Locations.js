import React from "react";
import "./Locations.css";

import barberShop1 from "../images/barbershop-images/barbershop1.jpg";
import barberShop2 from "../images/barbershop-images/barbershop2.jpg";
import barberShop3 from "../images/barbershop-images/barbershop3.jpg";
import Footer from "../../footer/components/Footer";

const locations = [
	{
		id: 1,
		name: "Location 1",
		image: barberShop1,
		address: "123 Main St, City",
		km: "3 km",
		call: "+123 456 789",
		social: {
			telegram: "https://telegram.com/yourchannel",
			instagram: "https://instagram.com/yourprofile",
			facebook: "https://facebook.com/yourpage",
		},
	},	
	{
		id:2,
		name: "Location 2",
		image: barberShop2,
		address: "123 Main St, City",
		km: "3 km",
		call: "+123 456 789",
		social: {
			telegram: "https://telegram.com/yourchannel",
			instagram: "https://instagram.com/yourprofile",
			facebook: "https://facebook.com/yourpage",
		},
	},	
	{
		id:3,
		name: "Location 3",
		image: barberShop3,
		address: "123 Main St, City",
		km: "3 km",
		call: "+123 456 789",
		social: {
			telegram: "https://telegram.com/yourchannel",
			instagram: "https://instagram.com/yourprofile",
			facebook: "https://facebook.com/yourpage",
		},
	},	
];

const Locations = () => {
	return (
		<div className="main-container">
			<div className="locations">
			<h1 className="section-title">Locations</h1>
			<div className="map-container">
				{locations.map((location) => (
					<div className="map-card" key={location.id}>
						<h3>{location.name}</h3>
						<div className="image-container">
							<img src={location.image} alt={`Location ${location.name}`} />
						</div>
						<p>Address: {location.address}</p>
						<p>KM: {location.km}</p>
						<p>Call: {location.call}</p>
						<div className="social-links">
							<a href={location.social.telegram}>Telegram</a>
							<a href={location.social.instagram}>Instagram</a>
							<a href={location.social.facebook}>Facebook</a>
						</div>
					</div>
				))}
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Locations;
