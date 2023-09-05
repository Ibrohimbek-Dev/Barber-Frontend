import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

import { AuthContext } from "./shared/context/auth-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import { useAuth } from "./shared/hooks/auth-hook";

const Home = React.lazy(() => import("./pages/home/components/Home"));
const Services = React.lazy(() =>
	import("./pages/services/components/Services")
);
const Barbers = React.lazy(() => import("./pages/barbers/components/Barbers"));
const Gallery = React.lazy(() => import("./pages/gallery/components/Gallery"));
const Book = React.lazy(() => import("./pages/book/components/Book"));

const ContactUs = React.lazy(() => import("./pages/drop/components/ContactUs"));
const Locations = React.lazy(() => import("./pages/drop/components/Locations"));
const Prices = React.lazy(() => import("./pages/drop/components/Prices"));

const Auth = React.lazy(() => import("./user/pages/Auth"));

const App = () => {
	const { token, login, logout, userId } = useAuth();	

	let routes = (
		<Routes>
			<Route path="/home" element={<Home />} exact />
			<Route path="/services" element={<Services />} exact />
			<Route path="/barbers" element={<Barbers />} exact />
			<Route path="/gallery" element={<Gallery />} exact />			

			<Route path="/contact" element={<ContactUs />} exact />
			<Route path="/locations" element={<Locations />} exact />
			<Route path="/prices" element={<Prices />} exact />
			<Route path="/book" element={<Book/>} exact />
			<Route path="*" element={<Navigate to="/home" replace />} exact />
			<Route path="/auth" element={<Auth />} exact />
		</Routes>
	);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}
		>
			<BrowserRouter>
				<MainNavigation />

				<main>
					<Suspense
						fallback={
							<div className="center">
								<LoadingSpinner />
							</div>
						}
					>
						{routes}
					</Suspense>
				</main>				
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
