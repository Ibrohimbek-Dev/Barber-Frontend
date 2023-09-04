import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MAXLENGTH,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";
import Footer from "../../pages/footer/components/Footer";

const Auth = () => {
	const auth = useContext(AuthContext);
	const [isLoginMode, setIsLoginMode] = useState(true);
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const navigate = useNavigate()

	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: "",
				isValid: false,
			},
			password: {
				value: "",
				isValid: false,
			},
		},
		false
	);

	const switchModeHandler = () => {
		if (!isLoginMode) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
					image: undefined,					
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: "",
						isValid: false,
					},
					image: {
						value: null,
						isValid: false,
					},
				},
				false
			);
		}
		setIsLoginMode((prevMode) => !prevMode);
	};

	const authSubmitHandler = async (event) => {
		event.preventDefault();

		if (isLoginMode) {
			try {
				const responseData = await sendRequest(
					process.env.REACT_APP_BACKEND_URL + "/users/login",
					"POST",
					JSON.stringify({
						email: formState.inputs.email.value,
						password: formState.inputs.password.value,
					}),
					{
						"Content-Type": "application/json",
					}
				);
				
				auth.login(responseData.userId, responseData.token);
				navigate("/book");
				window.location.reload();

			} catch (err) {}
		} else {
			try {
				const formData = new FormData();
				formData.append("email", formState.inputs.email.value);
				formData.append("name", formState.inputs.name.value);
				formData.append("phone", formState.inputs.phone.value); // Add this line
				formData.append("password", formState.inputs.password.value);
				formData.append("image", formState.inputs.image.value);
		
				const responseData = await sendRequest(
					process.env.REACT_APP_BACKEND_URL + "/users/signup",
					"POST",
					formData
				);				
				auth.login(responseData.userId, responseData.token);
				navigate("/book")
				window.location.reload()				
			} catch (err) {}
		}
	};	

	return (
		<div className="main-container">
			<ErrorModal error={error} onClear={clearError} />
			<Card className="authentication">
				{isLoading && <LoadingSpinner asOverlay />}
				<h2>Login Required</h2>
				<hr />
				<form onSubmit={authSubmitHandler}>
					{!isLoginMode && (
						<Input
							element="input"
							id="name"
							type="text"
							label="Your Name"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a name."
							onInput={inputHandler}
						/>
					)}
					{!isLoginMode && (
						<Input
							element="input"
							id="phone" // Use a unique ID for the input
							type="tel" // Use type "tel" for phone numbers
							label="Phone Number"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid phone number"
							onInput={inputHandler}
							maxLength={11} // Set max length to 11
							placeHolder="Enter phone number"
						/>
					)}
					{!isLoginMode && (
						<ImageUpload
							center
							id="image"
							onInput={inputHandler}
							errorText="Please provide an image."
						/>
					)}
					<Input
						element="input"
						id="email"
						type="email"
						label="E-Mail"
						validators={[VALIDATOR_EMAIL()]}
						errorText="Please enter a valid email address."
						onInput={inputHandler}
					/>
					<Input
						element="input"
						id="password"
						type="password"
						label="Password"
						validators={[VALIDATOR_MINLENGTH(6)]}
						errorText="Please enter a valid password, at least 6 characters."
						onInput={inputHandler}
					/>
					<Button type="submit" disabled={!formState.isValid}>
						{isLoginMode ? "LOGIN" : "SIGNUP"}
					</Button>
				</form>
				<Button inverse onClick={switchModeHandler}>
					SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
				</Button>
			</Card>
			<Footer />
		</div>
	);
};

export default Auth;
