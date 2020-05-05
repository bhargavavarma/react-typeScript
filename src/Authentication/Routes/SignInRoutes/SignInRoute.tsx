import React from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import {History} from 'history';
import { getAccessToken } from "../../Utils/StorageUtils";
import  SignInpage  from "../../Components/SignInPage/SignInPage";

import {
	PRODUCT_PAGE_PATH,
	SIGN_IN_PATH,
} from "../../Constants/RouteConstants";

@inject("authStore")
@observer
class SignInRoute extends React.Component<{authStore: any, history: History}> {
	@observable userName: string;
	@observable password: string;
	@observable errorMessage: string;
	@observable loading: boolean;

	constructor(props: any) {
		super(props);
		this.userName = '';
		this.password = '';
		this.errorMessage = '';
		this.loading = false;
	}

	loginClick = async () => {
		const {
			userSignIn,
			getUserSignInAPIError,
			clearNetworkErrorMessage,
		} = this.props.authStore;

		if (this.userName === '') {
			this.errorMessage = "Please enter username";
		} else if (this.password === '') {
			this.errorMessage = "Please enter password";
		} else if (getUserSignInAPIError !== '') {
			this.errorMessage = "Network Error";
			clearNetworkErrorMessage();
		} else if (this.userName !== '' && this.password !== '') {
			this.loading = true;
			await userSignIn();
		}
		this.redirectThePages();
	};

	onChangeUserName = (event: any) => {
		this.userName = event.target.value;
	};

	onChangeUserPassword = (event: any) => {
		this.password = event.target.value;
	};

	redirectThePages = () => {
		if (getAccessToken() !== undefined) {
			this.props.history.push(PRODUCT_PAGE_PATH);
		} else {
			this.props.history.push(SIGN_IN_PATH);
		}
	};

	render() {
		return (
			<SignInpage
				loading={this.loading}
				onChangeUserName={this.onChangeUserName}
				onChangeUserPassword={this.onChangeUserPassword}
				loginClick={this.loginClick}
				errorMessage={this.errorMessage}
			/>
		);
	}
}

export { SignInRoute };