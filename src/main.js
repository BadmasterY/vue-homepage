import Vue from 'vue';
import iView from 'iview';

import App from './components/sao';
import Me from './components/me';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})