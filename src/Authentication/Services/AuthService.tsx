import {create} from 'apisauce';
import React from 'react';
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";


class AuthServices extends React.Component {
    api
    constructor(props)
    {
        super(props);
        this.api = create({baseURL :'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'})
    }
    
    SignInAPI () {
        
        return networkCallWithApisauce(this.api,'v1/signin/','',apiMethods.get)
    }
}

export default AuthServices;