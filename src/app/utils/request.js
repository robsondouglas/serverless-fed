import { getToken } from "auth";

const url = 'http://localhost:3000/DEV/';

const post = (svc, itm) => new Promise((resolve, reject)=>{
    fetch(`${url}${svc}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        method: "POST",
        body: JSON.stringify(itm)
    })
    .then( res => {
      res.json()
        .then( j  => resolve(j) )
        .catch(ex => resolve(undefined))
    }  )
    .catch(ex=>reject(ex))
})