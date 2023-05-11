import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
	const [productsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams();

	const getProducts = async () => {
		let keyword = query.get("q") || "";
		let url = `https://my-json-server.typicode.com/J-Sejoon/hnm/products?q=${keyword}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<div>
			<Container>
				<Row>
					{productsList.map((menu) => (
						<Col sm={6} lg={3}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;
