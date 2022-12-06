/*
	검색기능 추가
	useSearchParams - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용되는 라우터 훅

	주소 뒤에 /?q=파라메터
*/

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩 css
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
	const [productsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams(); //주소뒤 파라메터

	const getProducts = async () => {
		let keyword = query.get("q") || "";
		//쿼리값을 읽어 온다,q의 밸류(아이템을 가져온다) / 없을땐 빈 스트링
		let url = `https://my-json-server.typicode.com/J-Sejoon/hnm/products?q=${keyword}`;
		//
		let response = await fetch(url);
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]); //키워드를 입력했을때마다 getProducts함수 실행

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

// https://www.npmjs.com/package/json-server
// $ npm install -g json-server
// $ json-server --watch db.json --port 5000
