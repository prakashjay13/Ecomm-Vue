import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store/store'
import VueSweetalert2 from 'vue-sweetalert2';
import { VueMailchimpEmailSignupForm } from './mail/Email-signup.vue';
Vue.component("vue-mailchimp-email-signup-form", VueMailchimpEmailSignupForm);
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
