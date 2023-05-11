import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { BsHeartFill, BsHeart, BsHandbag } from "react-icons/bs";

const ProductDetail = () => {
	const [product, setProduct] = useState(null);
	const [heartFill, setHeartFill] = useState(false);
	let { id } = useParams();

	const getProductDetail = async () => {
		let url = `https://my-json-server.typicode.com/J-Sejoon/hnm/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		setProduct(data);
	};

	const likeToggle = () => {
		setHeartFill(!heartFill);
	};

	useEffect(() => {
		getProductDetail();
	}, []);

	return (
		<Container>
			<Row>
				<Col xs={12} sm={7}>
					<img src={product?.img} alt="" className="detail-img" />
				</Col>
				<Col sm={{ span: 4, offset: 1 }}>
					<div className="detail-titleWrap">
						<div className="detail-title">{product?.title}</div>
						<div className="like" onClick={likeToggle}>
							{heartFill ? <BsHeartFill className="heartFill" /> : <BsHeart />}
						</div>
					</div>
					<div className="detail-price">₩ {product?.price}</div>
					{product?.new === true ? <div className="new">신제품</div> : ""}

					<div>
						<Dropdown className="detail-dropdown">
							<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
								사이즈선택
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{product?.size.length > 0 &&
									product.size.map((item) => (
										<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
									))}
							</Dropdown.Menu>
						</Dropdown>
					</div>

					<Button variant="dark">
						<BsHandbag />
						추가
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
