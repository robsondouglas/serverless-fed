import {CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoRefreshToken} from 'amazon-cognito-identity-js';

const getStorage = () =>  localStorage.getItem('storage-credentials') === 'local' ? localStorage : sessionStorage;


const UserPool = new CognitoUserPool({
    UserPoolId: 'sa-east-1_28VaLNwAP',
    ClientId:   '7joob4d238qo57i2gdmnkpava2',
    Storage: getStorage()
});

let _accessToken = '';

export const signUp = (name, email, pwd) => new Promise((resolve,reject)=>{
    UserPool.signUp(email, pwd, [{Name:'name', Value: name}], null, (error, data)=>{
         error ?  reject(error) : resolve(data)
    });
});


export const signIn = (usr, pwd, persist) => new Promise((resolve, reject) => {

    localStorage.setItem('storage-credentials', persist ? 'local' : 'session' )

    const details = new AuthenticationDetails({Username: usr, Password: pwd});    
    const _user   = new CognitoUser({ Username: usr, Pool: UserPool, Storage: getStorage() });
    
    _user.authenticateUser(details, {
        onSuccess: ({idToken, refreshToken, accessToken}) => {
            resolve({name:idToken.payload.name, user:idToken.payload.email, refreshToken:refreshToken.token, accessToken:accessToken.jwtToken});
            _accessToken = accessToken.jwtToken
        },
        onFailure: reject,
        newPasswordRequired: ()=>console.log('required')
    });
})

export const refreshSignin = () => new Promise((resolve, reject) => {
    const usr  = UserPool.getCurrentUser();

    if(usr){
        usr.getSession((error, {idToken, refreshToken, accessToken}) => {
            _accessToken = accessToken.jwtToken;            
            error ?  resolve(null) : resolve({name:idToken.payload.name, user:idToken.payload.email});//, refreshToken:refreshToken.token, accessToken:accessToken.jwtToken})
        });
    }
    else
    { resolve(null) }
})

export const getToken = () => _accessToken;

export const confirmSignup = (usr, code) => new Promise((resolve, reject) => {
    const _user   = new CognitoUser({ Username: usr, Pool: UserPool, Storage: getStorage() });
    _user.confirmRegistration(code, false, (error, data)=>{
        console.log(JSON.stringify(data));
        error ?  reject(error) : resolve(data)
    });
})

