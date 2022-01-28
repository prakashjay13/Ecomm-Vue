import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: window.localStorage.getItem('token') ?? '',
        email: window.localStorage.getItem('uid') ?? '',
        inCart: JSON.parse(localStorage.getItem('myCart')) ? JSON.parse(localStorage.getItem('myCart')) : [],
    },

    getters: {
        inCart: state => state.inCart,

    },

    mutations: {
        tokenemail(state, payload) {

            return state.token = payload.id, state.email = payload.uid;
        },
        logout: (state) => {
            state.token = "",
                state.email = "",
                state.users = "",
                window.localStorage.removeItem('token'),
                window.localStorage.removeItem('uid'),
                window.localStorage.removeItem('users'),
                window.localStorage.removeItem('myWishlist'),
                window.localStorage.removeItem('total')

        },
        addToCart(state, id) { state.inCart.push(id) },


    },

    actions: {
        token(context, payload) {
            context.commit('tokenemail', payload)
        },
        logout({ commit }) {
            commit('logout')
            this.$router.push("/login");
        },

        addToCart(context, id) { context.commit('addToCart', id) }
    }
})