import React from "react";
import "./Gallery.css";
import Footer from "../../footer/components/Footer";

// Import all image files from the images directory
const importAllImages = (image) => {	
	 let images = {};
		image.keys().map((item) => {
			images[item.replace("./", "")] = image(item);
		});
		return images;
};

const images = importAllImages(
	require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
	return (
		<div className="main-container">
			<div className="gallery">
				<h1 className="section-title">Image Gallery</h1>
				<div className="container">
					<div className="image-grid">
						{Object.keys(images).map((imageName, index) => (
							<div className="image-card" key={index}>
								<img src={images[imageName]} alt={`Image ${index + 1}`} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Gallery;
