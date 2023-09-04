import React, { useState, useEffect } from "react";
import "./Services.css";

import beardTrimImage from "../images/beard_trim.jpg";
import skinFadeImage from "../images/skinfade.jpg";
import breadMoreImage from "../images/bread_more.jpg";
import fullServiceImage from "../images/full_service.jpg";
import haircutImage from "../images/haircut.jpg";
import kidsCutImage from "../images/kids_cut.jpg";
import razorBladeImage from "../images/razor_blade.jpg";
import shavingImage from "../images/shaving.jpg";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import Footer from "../../footer/components/Footer";

const servicesData = [
	{
		title: "Beard Trim",
		price: "$20",
		image: beardTrimImage,
	},
	{
		title: "Skinfade",
		price: "$15",
		image: skinFadeImage,
	},
	{
		title: "Bread & More",
		price: "$30",
		image: breadMoreImage,
	},
	{
		title: "Full Service",
		price: "$12",
		image: fullServiceImage,
	},
	{
		title: "Haircut",
		price: "$10",
		image: haircutImage,
	},
	{
		title: "Kids Cut",
		price: "$10",
		image: kidsCutImage,
	},
	{
		title: "Razor Blade",
		price: "$14",
		image: razorBladeImage,
	},
	{
		title: "Shaving",
		price: "$10",
		image: shavingImage,
	},
];

const Services = () => {
	const [animatedIndex, setAnimatedIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimatedIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
		}, 1000); // 1 second

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="main-container">
			<div className="services-container">
				<h1 className="section-title">Our Services</h1>
				<div className="services container">
					{servicesData.map((service, index) => (
						<div className="service" key={index}>
							<img src={service.image} alt={service.title} />
							<h3
								className={`service-title ${
									index === animatedIndex ? "animating" : ""
								}`}
							>
								{service.title}
							</h3>
							<p className="service-price">{service.price}</p>
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Services;
