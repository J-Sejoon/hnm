import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
	const aaa = useNavigate();
	const showDetail = () => {
		aaa(`/product/${item.id}`);
	};
	return (
		<div className="productCard">
			<div className="img-container" onClick={showDetail}>
				<img src={item?.img} alt="" />
				<div className="item_box">
					{item?.choice === true ? (
						<div className="event">Weakly Best Seller</div>
					) : (
						""
					)}
					{item?.new === true ? <div className="new">new</div> : ""}
				</div>
			</div>

			<div className="title">{item?.title}</div>
			<div className="price">₩{item?.price}</div>
		</div>
	);
};

export default ProductCard;
