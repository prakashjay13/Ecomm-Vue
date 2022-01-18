import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data) {
    return axios.post(`${MAIN_URL}login`, data)
}
export function userRegister(data) {
    return axios.post(`${MAIN_URL}register`, data)
}
export function ContactUs(data) {
    return axios.post(`${MAIN_URL}contact`, data)
}

export function banner(data) {
    return axios.get(`${MAIN_URL}banner`, data)
}

export function product(data) {
    return axios.get(`${MAIN_URL}product`, data)
}

export function checkout(data) {
    return axios.post(`${MAIN_URL}checkout`, data)
}


export function profile() {
    var token = localStorage.getItem('token');
    return axios.get(`${MAIN_URL}profile`, { headers: { "Authorization": `Bearer ${token}` } })
}

export function changepassword(data) {
    var token = localStorage.getItem('token');
    return axios.post(`${MAIN_URL}changepassword`, data, { headers: { "Authorization": `Bearer ${token}` } })
}

export function cms() {
    return axios.get(`${MAIN_URL}cms`);
}

export function coupon() {
    return axios.get(`${MAIN_URL}getcoupons`);
}



export default { userLogin, userRegister, ContactUs, banner, product, profile, checkout, changepassword, cms, coupon };