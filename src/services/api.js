import axios from 'axios';
import { CREATETODO, LOGIN, SIGNUP } from './apiConstants';

export const login=async(data)=>{
    return axios.post(LOGIN,data)
}
export const signup=async(data)=>{
    return axios.post(SIGNUP,data)
}
export const createtodo=async(data)=>{
    let token=getToken();
    console.log(token);
    return axios.post(CREATETODO,data,{
        headers:{
            auth:token
        }
    })
}
export const gettodo=async()=>{
    let token=getToken();
    console.log(token);
    return axios.get(CREATETODO,{
        headers:{
            auth:token
        }
    })
}


export function getToken(){
    let user= localStorage.getItem('user');
    if(!user) return;
    const userObj=JSON.parse(user);
    return userObj.token;
}