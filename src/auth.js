import {CognitoUserPool, CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';

const UserPool = new CognitoUserPool({
    UserPoolId: 'sa-east-1_28VaLNwAP',
    ClientId: '7joob4d238qo57i2gdmnkpava2'
});

export const signUp = (name, email, pwd) => new Promise((resolve,reject)=>{
    
    UserPool.signUp(email, pwd, [{Name:'name', Value: name}], null, (error, data)=>{
        if(error)
        {reject(error)}
        else
        {resolve(data)}
    });
});

export const signIn = (usr, pwd) => new Promise((resolve, reject) => {
    const details = new AuthenticationDetails({Username: usr, Password: pwd});    
    const _user   = new CognitoUser({ Username: usr, Pool: UserPool });

    _user.authenticateUser(details, {
        onSuccess: (res)=>resolve(res),
        onError: (err)=> reject(err),
        newPasswordRequired: ()=>console.log('required')
    });
})
