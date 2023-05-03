import { getToken } from "auth";

const url = 'https://7mdzba7f15.execute-api.sa-east-1.amazonaws.com/DEV/task/'//'http://localhost:3000/DEV/';

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
        .catch(ex => reject(ex))
    }  )
    .catch(ex=>reject(ex))
})
    


export const add  = (itm)    => post('task/add', itm);
export const list = (filter) => post('task/list', filter);
export const remove = (key) => post('task/remove', key);

