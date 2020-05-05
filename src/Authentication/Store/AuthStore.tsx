import {observable,action} from 'mobx';
import { API_INITIAL } from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import { setAccessToken, getAccessToken, clearUserSession } from "../../utils/StorageUtils";

class AuthStore {
    @observable userGetInAPIStatus;
    @observable getUserSignInAPIError;
    @observable isLogin;
    authAPIService;

    constructor(authServices)
    { 
       this.authAPIService = authServices;
       this.userGetInAPIStatus = API_INITIAL;
       this.getUserSignInAPIError = null;
       this.isLogin = false;
    }

    @action.bound userSignIn()
    { 
    const usersPromise = this.authAPIService.SignInAPI();
    return bindPromiseWithOnSuccess(usersPromise)
    .to(this.setGetUserSignInAPIStatus, this.setUsersSignInAPIResponse)
    .catch (this.setGetUserSignInAPIError)
    }

    @action.bound setUsersSignInAPIResponse(response)
    {
        setAccessToken(response[0].access_token);
        
    }

    @action.bound setGetUserSignInAPIError (error)
    {
        this.getUserSignInAPIError = error;
    }

    @action.bound setGetUserSignInAPIStatus (status)
    {
      this.userGetInAPIStatus = status;
      this.isLogin = true;
    }

    @action.bound clearNetworkErrorMessage ()
    {
      this.getUserSignInAPIError = null;
    }
    
    @action.bound UserSignOut ()
    {
      clearUserSession();

    }


    

}


export default AuthStore;
