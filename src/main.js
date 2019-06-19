import Vue from 'vue';
import iView from 'iview';
import VueLazyload from 'vue-lazyload';

import App from './App';
import 'iview/dist/styles/iview.css';

Vue.use(VueLazyload, {
    err: '../static/images/error.png',
});
Vue.use(iView);

new Vue({
    el: '#app',
    template: '<App />',
    components: { App }
})