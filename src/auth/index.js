import {API} from "../backend";

export const createUser = user =>{
    return fetch(`${API}create`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        // return response.json()
        console.log(response);
    })
    .catch(err => console.log(err));
}



