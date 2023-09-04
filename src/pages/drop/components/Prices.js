import React from "react";
import "./Prices.css"; // You can create this CSS file for styling
import Footer from "../../footer/components/Footer";

// Define the number of hairstyles and generate an array
const numberOfHairstyles = 8; // Change this to the desired number
const hairstyleNames = [
	"Classic Bob",
	"Long Layers",
	"Short and Sleek",
	"Messy Waves",
	"Braided Updo",
	"Curls Galore",
	"Half-Up Bun",
	"Top Knot",
];

const hairPrices = ["$30", "$45", "$25", "$35", "$50", "$40", "$30", "$35"];



const hairstyles = Array.from({ length: numberOfHairstyles }, (_, index) => ({
	id: index + 1,
	name: hairstyleNames[index],
	image: require(`../images/hair-styles/hair${index + 1}.jpg`),
	price: hairPrices[index],
	minutes: Math.floor(Math.random() * 30) + 15, // Randomly generated minutes between 15 and 45
}));

const Prices = () => {
	return (
		<div className="main-container">
			<div className="price ">
			<h1 className="section-title">Prices</h1>
			<div className="hairstyle-container container">
				{hairstyles.map((hairstyle) => (
					<div className="hairstyle-card" key={hairstyle.id}>
						<div className="image-container">
							<img src={hairstyle.image} alt={`Hairstyle ${hairstyle.name}`} />
						</div>
						<h3>{hairstyle.name}</h3>
						<p>Price: {hairstyle.price}</p>
						<p>Duration: {hairstyle.minutes} minutes</p>
					</div>
				))}
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Prices;
