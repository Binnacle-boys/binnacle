import Vue from 'nativescript-vue';
import App from './components/App.vue';
import * as geolocation from "nativescript-geolocation";

if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');


geolocation.enableLocationRequest();

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
