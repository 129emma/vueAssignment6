import Vue from 'vue'
import App from './App.vue'
import HomePage from './Home.vue'

Vue.component('home-component', HomePage);

new Vue({
  el: '#app',
  render: h => h(App)
})
