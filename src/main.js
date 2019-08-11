import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import 'vant/lib/icon/local.css'; //Icon 组件默认引用 yzcdn.cn 域名下的字体文件，如果想要使用本地字体文件，请引入这个 css 文件
import 'amfe-flexible/index.js';

import {
    Swipe,
    SwipeItem,
    Step,
    Steps,
    Skeleton,
    Progress,
    Panel,
    NoticeBar,
    List,
    ImagePreview,
    Divider,
    Grid,
    GridItem,
    CountDown,
    Collapse,
    CollapseItem,
    Circle,
    SwipeCell,
    PullRefresh,
    Overlay,
    Notify,
    DropdownMenu,
    DropdownItem,
    Dialog,
    ActionSheet,
    Uploader,
    SwitchCell,
    Tabbar,
    TabbarItem,
    Button,
    Cell,
    CellGroup,
    Icon,
    Tag,
    Image,
    Lazyload,
    Loading,
    Row,
    Col,
    Popup,
    Toast,
    Checkbox,
    CheckboxGroup,
    DatetimePicker,
    Field,
    NumberKeyboard,
    Picker,
    RadioGroup,
    Radio,
    Rate,
    Search,
    Slider,
    Stepper,
    Switch,
    Sticky,
    IndexBar,
    IndexAnchor,
    NavBar,
    Pagination,
    Sidebar,
    SidebarItem,
    Tab,
    Tabs,
    TreeSelect,
    AddressEdit,
    AddressList,
    Area,
    Card,
    ContactCard,
    ContactList,
    ContactEdit
} from 'vant';
Vue.use(Tabbar)
    .use(ContactCard)
    .use(ContactList)
    .use(ContactEdit)
    .use(Card)
    .use(Area)
    .use(TreeSelect)
    .use(AddressEdit)
    .use(AddressList)
    .use(Tab)
    .use(Tabs)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Pagination)
    .use(NavBar)
    .use(IndexBar)
    .use(IndexAnchor)
    .use(Swipe)
    .use(SwipeItem)
    .use(Sticky)
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
    .use(Picker)
    .use(RadioGroup)
    .use(Radio)
    .use(Rate)
    .use(Search)
    .use(Slider)
    .use(Stepper)
    .use(Switch)
    .use(SwitchCell)
    .use(Uploader)
    .use(ActionSheet)
    .use(Dialog)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Notify)
    .use(Overlay)
    .use(PullRefresh)
    .use(SwipeCell)
    .use(Circle)
    .use(Collapse)
    .use(CollapseItem)
    .use(CountDown)
    .use(Grid)
    .use(GridItem)
    .use(Divider)
    .use(List)
    .use(NoticeBar)
    .use(Panel)
    .use(Progress)
    .use(Skeleton)
    .use(Step)
    .use(Steps);
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
// .use();
Vue.config.productionTip = false;

Vue.prototype.$imagePreview = ImagePreview;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
