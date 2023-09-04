import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../../shared/context/auth-context";
import Footer from "../../footer/components/Footer";

const titles = [
	"Welcome to Our Salon",
	"Experience Luxury",
	"Book Your Appointment",
];

const Home = () => {
	const [titleIndex, setTitleIndex] = useState(0);
	const auth = useContext(AuthContext);

	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);


	const clickBookBtn = () => {
		if (auth.isLoggedIn) {
			navigate("/book");
		} else {
			navigate("/auth");
		}
	};

	return (
		<div className="main-container">
			<div className="home-container">
				<Container fluid className="background-image">
					<Row className="content">
						<Col className="frame">
							<h1 className={`title title-slider`}>{titles[titleIndex]}</h1>

							<Button
								variant="primary"
								className="order-button"
								onClick={clickBookBtn}
							>
								BOOK YOUR APPOINTMENT
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
