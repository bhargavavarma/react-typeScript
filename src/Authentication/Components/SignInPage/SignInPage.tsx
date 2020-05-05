import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import {
	StyledLoginComponent,
	UserINput,
	UserPassword,
	LoginButton,
	StyledLoginPage,
} from "./StyledComponents";

type signInPageProps= {
	loading: boolean
	onChangeUserName: any
	onChangeUserPassword: any
	loginClick: any
	errorMessage: string
}
class SignInpage extends React.Component<signInPageProps> {
	render() {
		const {
			loading,
			onChangeUserName,
			onChangeUserPassword,
			loginClick,
			errorMessage,
		} = this.props;

		let loginLoader: any;
		if (loading) {
			loginLoader = <Loader type="Oval" color="white" height={15} width={15} />;
		} else {
			loginLoader = "Login";
		}
		return (
			<StyledLoginPage>
				<StyledLoginComponent>
					<h3>Sign In</h3>
					<UserINput
						type="text"
						onChange={onChangeUserName}
						placeholder="Username"
					></UserINput>
					<UserPassword
						type="password"
						onChange={onChangeUserPassword}
						placeholder="Password"
					></UserPassword>
					<LoginButton data-testid="sign-in-button" onClick={loginClick}>
						{loginLoader}
					</LoginButton>
					<div>{errorMessage}</div>
				</StyledLoginComponent>
			</StyledLoginPage>
		);
	}
}

export default SignInpage;