//nav에 authenticate, setAuthenticate 전달해줘서 로그인, 아웃이 표시되게

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";


function App() {
	const [authenticate, setAuthenticate] = useState(false);
	

	return (
		<>
			<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
			<Routes>
				<Route path="/" element={<ProductAll />} />
				<Route
					path="login"
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
				<Route
					path="product/:id"
					element={<PrivateRoute authenticate={authenticate} />}
				/>
				<Route />
			</Routes>
		</>
	);
}

export default App;

