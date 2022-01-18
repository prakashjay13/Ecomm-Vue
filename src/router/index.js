import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue';
import Login from '../components/Login.vue';
import Cart from '../components/Cart.vue';
import Checkout from '../components/Checkout.vue';
import Product from '../components/Product.vue';
import Order from '../components/Order.vue';
import Register from '../components/Register.vue';
import Wishlist from '../components/Wishlist.vue';
import Account from '../components/Account.vue';
import Changepassword from '../components/Changepassword.vue';
import Cms from '../components/Cms.vue';


function myGuard(to, from, next) {
    let isAuthenticated = false;
    if (localStorage.getItem('uid') != undefined) {
        isAuthenticated = true;
    }
    else {
        isAuthenticated = false;
    }
    if (isAuthenticated) {
        next();
    }
    else {
        alert('Login to proceed further');
        next('/login');
    }
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/cms',
            name: 'Cms',
            component: Cms
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/wishlist',
            name: 'Wishlist',
            beforeEnter: myGuard,
            component: Wishlist
        },
        {
            path: '/checkout',
            name: 'Checkout',
            beforeEnter: myGuard,
            component: Checkout
        },
        {
            path: '/product/:id?',
            name: 'Product',
            component: Product
        },

        {
            path: '/account',
            name: 'Account',
            beforeEnter: myGuard,
            component: Account
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/order/:id?',
            name: 'Order',
            beforeEnter: myGuard,
            component: Order
        },
        {
            path: '/changepassword',
            name: 'Changepassword',
            beforeEnter: myGuard,
            component: Changepassword
        },
    ]
})