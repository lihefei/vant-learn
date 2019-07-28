<template>
    <div class="home">
        <h1>home</h1>
        <section>
            <h2>组件</h2>
            <section>
                <h4>Picker 选择器</h4>
                <van-picker
                    :columns="columns"
                    :default-index="2"
                    show-toolbar
                    title="标题"
                    @change="onChange"
                    @cancel="onCancel"
                    @confirm="onConfirm"
                />

                <van-picker :columns="columns2" show-toolbar title="多级联动" @change="onChange2" />
                <van-picker :columns="columns" loading />
            </section>
            <section>
                <h4>NumberKeyboard 数字键盘</h4>
                <van-button type="primary" @touchstart.stop="keyboardShow = true">弹出默认键盘</van-button>
                <van-button type="primary" @touchstart.stop="customKeyboardShow = true">弹出自定义键盘</van-button>
                <van-number-keyboard
                    :show="keyboardShow"
                    extra-key="."
                    close-button-text="完成"
                    @blur="keyboardShow = false"
                    @input="onInput"
                    @delete="onDelete"
                />

                <van-number-keyboard
                    :show="customKeyboardShow"
                    theme="custom"
                    extra-key="."
                    close-button-text="完成"
                    @blur="customKeyboardShow = false"
                    @input="onInput"
                    @delete="onDelete"
                />

                <van-field
                    readonly
                    clickable
                    :value="value"
                    @touchstart.native.stop="modelKeyboardShow = true"
                />

                <van-number-keyboard
                    v-model="value"
                    :show="modelKeyboardShow"
                    :maxlength="6"
                    @blur="modelKeyboardShow = false"
                />
            </section>
            <section>
                <h4>Field 输入框</h4>
                <van-cell-group>
                    <van-field v-model="value" placeholder="请输入用户名" />
                </van-cell-group>
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                </van-cell-group>
                <van-cell-group>
                    <van-field value="输入框已禁用" label="用户名" left-icon="contact" disabled />
                </van-cell-group>

                <van-cell-group>
                    <van-field v-model="username" label="用户名" placeholder="请输入用户名" error />
                    <van-field
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                        error-message="手机号格式错误"
                    />
                </van-cell-group>
                <van-cell-group>
                    <van-field
                        v-model="message"
                        label="留言"
                        type="textarea"
                        placeholder="请输入留言,高度自适应"
                        rows="3"
                        autosize
                    />
                </van-cell-group>
                <van-cell-group>
                    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
            </section>
            <section>
                <h4>DatetimePicker 时间选择</h4>
                <van-datetime-picker
                    v-model="currentDate"
                    :visible-item-count="4"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :show-toolbar="true"
                    title="自定标题"
                />
                <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" />
                <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :min-date="minDate"
                    :formatter="formatter"
                />
                <van-datetime-picker
                    v-model="currentTime"
                    type="time"
                    :min-hour="10"
                    :max-hour="20"
                />
                <van-datetime-picker v-model="currentTime" type="time" :filter="filter" />
            </section>

            <section>
                <h4>Checkbox 复选框</h4>
                <van-checkbox v-model="checked">复选框</van-checkbox>
                <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
                <van-checkbox
                    v-model="checked"
                    checked-color="blue"
                    icon-size="32"
                    label-position="left"
                >复选框</van-checkbox>
                <van-checkbox v-model="checked">
                    自定义图标
                    <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.checked ? icon.active : icon.inactive"
                    />
                </van-checkbox>
                <br />
                <van-checkbox-group v-model="result">
                    <van-checkbox
                        v-for="(item, index) in list"
                        :key="item"
                        :name="item"
                    >复选框 {{ item }}</van-checkbox>
                </van-checkbox-group>
                <br />
                <van-checkbox-group v-model="result" :max="2">
                    <van-checkbox
                        v-for="(item, index) in list"
                        :key="item"
                        :name="item"
                    >复选框 {{ item }}</van-checkbox>
                </van-checkbox-group>

                <br />
                <van-checkbox-group v-model="result">
                    <van-cell-group>
                        <van-cell
                            v-for="(item, index) in list"
                            clickable
                            :key="item"
                            :title="`复选框 ${item}`"
                            @click="checkboxToggle(index)"
                        >
                            <van-checkbox
                                :name="item"
                                ref="checkboxes"
                                shape="square"
                                slot="right-icon"
                            />
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </section>

            <section>
                <h4>Popup 弹出层</h4>
                <van-button type="primary" size="small" @click="showPopup">展示弹出层</van-button>&nbsp;
                <van-button type="primary" size="small" @click="showPopup">顶部弹出</van-button>&nbsp;
                <van-button type="primary" size="small" @click="showPopup">指定挂载节点</van-button>
                <van-popup v-model="show" position="top" round :style="{ height: '20%' }" />
                <van-popup v-model="show" :get-container="getContainer">内容</van-popup>
            </section>

            <section>
                <h4>Layout 布局</h4>
                <van-row>
                    <van-col span="8">span: 8</van-col>
                    <van-col span="8">span: 8</van-col>
                    <van-col span="8">span: 8</van-col>
                </van-row>
                <van-row>
                    <van-col span="4">span: 4</van-col>
                    <van-col span="10" offset="4">offset: 4, span: 10</van-col>
                </van-row>

                <van-row>
                    <van-col offset="12" span="12">offset: 12, span: 12</van-col>
                </van-row>
                <van-row gutter="20">
                    <van-col span="8">span: 8</van-col>
                    <van-col span="8">span: 8</van-col>
                    <van-col span="8">span: 8</van-col>
                </van-row>
                <!-- 左对齐 -->
                <van-row type="flex">
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                </van-row>

                <!-- 居中 -->
                <van-row type="flex" justify="center">
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                </van-row>

                <!-- 右对齐 -->
                <van-row type="flex" justify="end">
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                </van-row>

                <!-- 两端对齐 -->
                <van-row type="flex" justify="space-between">
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                </van-row>

                <!-- 每个元素的两侧间隔相等 -->
                <van-row type="flex" justify="space-around">
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                    <van-col span="6">span: 6</van-col>
                </van-row>
            </section>
            <section>
                <h4>Image 图片</h4>
                <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <br />
                <van-image
                    fit="contain"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    fit="cover"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    fit="fill"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    fit="none"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    fit="scale-down"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <br />
                <van-image
                    round
                    fit="contain"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    round
                    fit="cover"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    round
                    fit="fill"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    round
                    fit="none"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    round
                    fit="scale-down"
                    width="80"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <br />
                <van-image
                    width="100"
                    height="100"
                    lazy-load
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <br />
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                    <template v-slot:error>加载失败</template>
                </van-image>
            </section>

            <section>
                <h4>Icon 图标</h4>
                <van-icon name="close" info="10" />&emsp;
                <van-icon name="close" size="36" />&emsp;
                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                <hr />
                <strong>集成iconfont</strong>
                <br />
                <van-icon class-prefix="iconfont icon-zhifubao" />&emsp;
                <van-icon class-prefix="iconfont icon-ai-SIM" />&emsp;
                <van-icon class-prefix="iconfont icon-computer" />
            </section>
            <section>
                <h4>Cell 单元格</h4>
                <van-cell-group>
                    <van-cell title="单元格" value="内容" :clickable="true" @click="cellClick" />
                    <van-cell title="单元格" value="内容" label="描述信息" />
                </van-cell-group>
                <hr />
                <van-cell title="单元格" value="内容" size="large" />
                <van-cell title="单元格" value="内容" size="large" label="描述信息" />
                <hr />
                <van-cell title="单元格" icon="location-o" />
                <hr />
                <van-cell value="内容" />

                <hr />
                <van-cell title="单元格" is-link />
                <van-cell title="单元格" is-link value="内容" />
                <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
                <hr />

                <van-cell title="单元格" is-link url="//youzan.github.io/vant/mobile.html" />
                <van-cell title="单元格" is-link to="index" />
                <hr />
                <van-cell-group title="分组1">
                    <van-cell title="单元格" value="内容" />
                </van-cell-group>
                <van-cell-group title="分组2">
                    <van-cell title="单元格" value="内容" />
                </van-cell-group>

                <hr />
                <van-cell value="内容" is-link>
                    <template slot="title">
                        <span class="custom-title">单元格</span>
                        <van-tag type="danger">标签</van-tag>
                    </template>
                </van-cell>

                <van-cell title="单元格" icon="shop-o">
                    <van-icon slot="right-icon" name="search" style="line-height: inherit;" />
                </van-cell>
            </section>

            <section>
                <h4>Button 按钮</h4>
                <van-button type="default">默认按钮</van-button>
                <van-button type="primary">主要按钮</van-button>
                <van-button type="info">信息按钮</van-button>
                <van-button type="warning">警告按钮</van-button>
                <van-button type="danger">危险按钮</van-button>

                <hr />

                <van-button plain type="primary">朴素按钮</van-button>
                <van-button plain type="danger">朴素按钮</van-button>
                <hr />
                <van-button plain hairline type="primary">细边框按钮</van-button>
                <van-button plain hairline type="danger">细边框按钮</van-button>

                <hr />
                <van-button disabled type="primary">禁用状态</van-button>
                <van-button disabled type="danger">禁用状态</van-button>

                <hr />
                <van-button loading type="primary" />
                <van-button loading type="primary" loading-type="spinner" />
                <van-button loading type="danger" loading-text="加载中..." />

                <hr />
                <van-button square type="primary">方形按钮</van-button>
                <van-button round type="danger">圆形按钮</van-button>

                <hr />
                <van-button icon="star-o" type="primary" />
                <van-button icon="star-o" type="primary">按钮</van-button>
                <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="danger">按钮</van-button>

                <hr />
                <van-button type="primary" size="large">大号按钮</van-button>
                <van-button type="primary" size="normal">普通按钮</van-button>
                <van-button type="primary" size="small">小型按钮</van-button>
                <van-button type="primary" size="mini">迷你按钮</van-button>
            </section>
        </section>
        <section>
            <h2>内置样式</h2>
            <section>
                <h4>边框</h4>
                <p
                    class="van-hairline--top van-hairline--right van-hairline--bottom van-hairline--left"
                >上右下左边框</p>
                <p class="van-hairline--surround">全边框</p>
            </section>

            <section>
                <h4>动画</h4>
                <!-- 淡入 -->
                <transition name="van-fade">
                    <div v-show="visible" class="demo-animate-block">Fade</div>
                </transition>
                <button @click=" toggle">toggleFade</button>
            </section>
        </section>
    </div>
</template>

<script>
const citys = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州']
};
export default {
    name: 'home',
    data() {
        return {
            visible: false,
            show: false,
            checked: true,
            icon: {
                active: 'https://img.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
            },
            list: ['a', 'b', 'c'],
            result: ['a', 'b'],
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date(),
            currentTime: '12:00',
            value: '',
            username: '',
            password: '',
            phone: '',
            message: '',
            sms: '',
            keyboardShow: false,
            customKeyboardShow: false,
            modelKeyboardShow: false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            columns2: [
                {
                    values: Object.keys(citys),
                    className: 'column1'
                },
                {
                    values: citys['浙江'],
                    className: 'column2',
                    defaultIndex: 2
                }
            ]
        };
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        cellClick(e) {
            console.log(e);
        },
        showPopup() {
            this.show = !this.show;
        },
        // 返回一个特定的 DOM 节点，作为挂载的父节点
        getContainer() {
            return document.querySelector('body');
        },
        checkboxToggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`;
            }
            return value;
        },
        filter(type, options) {
            if (type === 'minute') {
                return options.filter(option => option % 5 === 0);
            }

            return options;
        },
        onInput(value) {
            this.$toast(value);
        },
        onDelete() {
            this.$toast('删除');
        },
        onChange(picker, value, index) {
            this.$toast(`当前值：${value}, 当前索引：${index}`);
        },
        onConfirm(value, index) {
            this.$toast(`当前值：${value}, 当前索引：${index}`);
        },
        onCancel() {
            this.$toast('取消');
        },
        onChange2(picker, values) {
            picker.setColumnValues(1, citys[values[0]]);
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    padding: 15px;
}
.demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: #1989fa;
    border-radius: 3px;
}

.van-doc-demo-block {
    padding: 0 16px;
}
.van-doc-demo-block__title {
    padding-left: 0;
}
.van-col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
}
.van-col:nth-child(odd) {
    background-color: #39a9ed;
}
.van-col:nth-child(even) {
    background-color: #66c6f2;
}
</style>

