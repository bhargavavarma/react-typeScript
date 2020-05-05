import React from 'react';
import { SIGN_IN_PATH } from "../Constants/RouteConstants";
import {Route} from "react-router-dom";
import { SignInRoute } from "./SignInRoutes/SignInRoute";

const SignInPageRoute = [
	<Route key = {SIGN_IN_PATH} path={SIGN_IN_PATH} component={SignInRoute} />	
];

export default SignInPageRoute;