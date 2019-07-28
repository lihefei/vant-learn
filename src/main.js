import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import 'vant/lib/icon/local.css'; //Icon 组件默认引用 yzcdn.cn 域名下的字体文件，如果想要使用本地字体文件，请引入这个 css 文件
import 'amfe-flexible/index.js';

import { Tabbar, TabbarItem, Button, Cell, CellGroup, Icon, Tag, Image, Lazyload, Loading, Row, Col, Popup, Toast, Checkbox, CheckboxGroup, DatetimePicker, Field, NumberKeyboard, Picker } from 'vant';
Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Icon)
    .use(Tag)
    .use(Image)
    .use(Lazyload)
    .use(Loading)
    .use(Toast)
    .use(Row)
    .use(Col)
    .use(Popup)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(DatetimePicker)
    .use(Field)
    .use(NumberKeyboard)
    .use(Picker);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
