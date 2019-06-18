import Vue from 'vue';
import App from './App.vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app_1 = new Vue({
    el: '#app-1',
    data: {
        message: `页面加载于${new Date().toLocaleString()}`
    },
})

var app_2 = new Vue({
    el: '#app-2',
    data: {
        seen: false
    }
})

var app_3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            { text: 'Learn JavaScript.' },
            { text: 'Learn Vue.' },
            { text: 'Do a project.' },
        ]
    },
    beforeCreate: function () {
        console.log('app-3 创建之前...');
    },
    created: function () {
        console.log('app-3 创建好了...');
    },
    beforeMount: function () {
        console.log('app-3 渲染之前...')
    },
    mounted: function () {
        console.log('app-3 渲染好了...')
    },
    beforeUpdate: function () {
        console.log('app-3 更新之前...')
    },
    updated: function () {
        console.log('app-3 更新好了...')
    }
})

var app_4 = new Vue({
    el: '#app-4',
    data: {
        message: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app_5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
    }
})

Vue.component('todo-item', {
    // 接受一个 'prop' ，类似于自定义特性
    // prop 名为 todo
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app_6 = new Vue({
    el: '#app-6',
    data: {
        list: [
            { id: 0, text: 'one' },
            { id: 1, text: 'two' },
            { id: 2, text: 'three' },
        ]
    }
})

var app_7 = new Vue({
    el: '#app-7',
    data: {
        style: {
            color: 'red',
            fontSize: '16px'
        }
    }
})

var app_8 = new Vue({
    el: '#app-8',
    data: {
        // attributeName => attributename 
        // 强制转化为小写
        attributename: 'href',
        url: '#'
    }
})

var app_9 = new Vue({
    el: '#app-9',
    data: {
        isUserName: true
    },
    methods: {
        changeLogin: function () {
            this.isUserName = !this.isUserName;
        }
    }
})

var app_10 = new Vue({
    el: '#app-10'
})

var app_11 = new Vue({
    el: '#app-11'
})

var app_12 = new Vue({
    el: '#app-12',
    data: {
        selected: ''
    },
    updated: function () {
        console.log(this.selected);
    }
})

var app_13 = new Vue({
    el: '#app-13',
    data: {
        selected: []
    },
    updated: function () {
        console.log(this.selected);
    }
})

var app_14 = new Vue({
    el: '#app-14',
    data: {
        selected: 'A',
        options: [
            { value: 'A', text: 'one' },
            { value: 'B', text: 'two' },
            { value: 'C', text: 'three' }
        ]
    },
    updated: function () {
        console.log(this.selected);
    }
})

var app_15 = new Vue({
    el: '#app-15',
    data: {
        toggle: '',
    },
    updated: function () {
        console.log(this.toggle);
    }
})

Vue.component('xx', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

var app_16 = new Vue({
    el: '#app-16',
});

var app_17 = new Vue({
    el: '#app-17',
    data: {
        titles: [
            { id: 0, text: 'Hi.' },
            { id: 1, text: 'My' },
            { id: 2, text: 'Girl' },
        ]
    }
});

Vue.component('aaa', {
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <button @click="$emit('more-big', 0.1)">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
})

var app_18 = new Vue({
    el: '#app-18',
    data: {
        fontSize: 1,
        posts: [
            { id: 0, title: 'First blog.', content: '...' },
            { id: 1, title: 'Secound blog.', content: '...' },
            { id: 2, title: 'Third blog.', content: '...' },
        ]
    },
    methods: {
        addSize(changeSize) {
            this.fontSize += changeSize;
        }
    }
});

Vue.component('base-checkbox',{
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
        <input type="checkbox" :bind:checked="checked" @change="$emit('change', $event.target.checked)" />
    `
})

var app_19 = new Vue({
    el: '#app-19',
    data: {
        lovingVue: false
    },
    updated: function(){
        console.log(this.lovingVue);
    }
});

Vue.component('base-url',{
    props: {
        url: String
    },
    template: `<a>
        <slot>默认链接</slot>
    </a>`
})

var app_20 = new Vue({
    el: '#app-20',
    data: {
        url: 'http://www.baidu.com'
    }
})

Vue.component('my-web',{
    template:`
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="content"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    `
})

var app_21 = new Vue({
    el: '#app-21',
});
