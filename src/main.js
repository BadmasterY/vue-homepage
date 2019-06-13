import Vue from 'vue';
import iView from 'iview';

import App from './App.vue';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})