//반응형, 사이드 바 추가

import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";

import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = ({ authenticate, setAuthenticate }) => {
	const [sideState, setSideState] = useState("-100%");
	//sideBar의 left 상태
	const navigate = useNavigate();
	const menuList = [
		"여성",
		"Divided",
		"남성",
		"신생아/유아",
		"아동",
		"H&M HOME",
		"스포츠",
		"Sale",
		"지속가능성",
	];

	const search = (event) => {
		if (event.key === "Enter") {
			let keyword = event.target.value;
			console.log("keyword는?", keyword);
			navigate(`/?q=${keyword}`);
		}
	};

	const gotoLogin = () => {
		navigate("/login");
	};

	return (
		<div>
			<div className="side_menu" style={{ left: sideState }}>
				<div className="closeBtnWrap">
					<VscChromeClose className="closeBtn" onClick={() => {setSideState("-100%");}}/>
				</div>
				<ul className="side_menu-list">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
			</div>

			<div className="burger_menu hide">
				<VscThreeBars onClick={() => {setSideState("0");}} />
			</div>

			<div className="login_btnWrap">
				{authenticate ? (
					<div className="login_btn" onClick={() => setAuthenticate(false)}>
						<BiLogOutCircle /> <span>로그아웃</span>
					</div>
				) : (
					<div className="login_btn" onClick={gotoLogin}>
						<BiLogInCircle /> <span>로그인</span>
					</div>
				)}
				{console.log("로그인 상태는? ", authenticate)}
			</div>

			<h1>
				<Link to="/">
					<div className="img_wrap">
						<img width={90} src="/img/HM-Logo.png" alt="H&M" />
					</div>
				</Link>
			</h1>

			<nav>
				<ul className="menu-list">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>

				<div className="search">
					<BsSearch />
					<input
						type="text"
						placeholder="제품검색"
						onKeyPress={(event) => search(event)}
					/>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
