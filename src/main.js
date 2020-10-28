import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import User from './components/User.vue';
import UserDetails from './components/UserDetails.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/user', component: User},
  { path: '/user/:id', component: UserDetails, name: 'UserDetails'}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
