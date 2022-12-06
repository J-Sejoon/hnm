//리액트 부트스트랩을 이용해서 로그인 form
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
	const navigate = useNavigate();
	const loginUser = (e) => {
		e.preventDefault(); //새로고침 해주는걸 막아줌
		//console.log("loginUser 함수 실행");
		setAuthenticate(true); //로그인이 되게 바꿔줌
		navigate("/"); //첫페이지로 간다
	};

	return (
		<div className="container login-area">
			<Form className="login-form" onSubmit={loginUser}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="danger" type="submit">
					로그인
				</Button>
			</Form>
		</div>
	);
};

export default Login;
