<template>
    <div class="home">
        <h1>home</h1>
        <section>
            <h2>组件</h2>

            <section>
                <h4></h4>
            </section>

            <section>
                <h4></h4>
            </section>

            <section>
                <h4></h4>
            </section>

            <section>
                <h4>Card 卡片</h4>
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                />
                <van-card
                    num="2"
                    tag="标签"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    origin-price="10.00"
                />
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                >
                    <div slot="tags">
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </div>
                    <div slot="footer">
                        <van-button size="mini">按钮</van-button>
                        <van-button size="mini">按钮</van-button>
                    </div>
                </van-card>
            </section>

            <section>
                <h4>Area 省市区选择</h4>
                <van-area :area-list="areaList" value="110101" />
            </section>

            <section>
                <h4>AddressList 地址列表</h4>
                <van-address-list
                    v-model="chosenAddressId"
                    :list="addressListList"
                    :disabled-list="disabledList"
                    disabled-text="以下地址超出配送范围"
                    @add="onAdd"
                    @edit="onEdit"
                />
            </section>

            <section>
                <h4>AddressEdit 地址编辑</h4>
                <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    @save="addressEditOnSave"
                    @delete="addressEditOnDelete"
                    @change-detail="addressEditOnChangeDetail"
                />
            </section>

            <section>
                <h4>TreeSelect 分类选择</h4>
                <van-tree-select
                    :items="treeSelectItems"
                    :main-active-index="mainActiveIndex"
                    :active-id="treeSelectActiveId"
                    @click-nav="treeSelectOnClickNav"
                    @click-item="treeSelectOnClickItem"
                />
            </section>

            <section>
                <h4>Tab 标签页</h4>
                <van-tabs v-model="tabActive" @click="$toast('点击')" sticky animated swipeable>
                    <van-tab title="标签 1">内容 1</van-tab>
                    <van-tab title="标签 2">内容 2</van-tab>
                    <van-tab title="标签 3">内容 3</van-tab>
                    <van-tab title="标签 4">内容 4</van-tab>
                </van-tabs>
                <van-tabs @disabled="$toast('已被禁用');">
                    <van-tab title="标签 1">内容 1</van-tab>
                    <van-tab title="标签 2" disabled>内容 2</van-tab>
                    <van-tab title="标签 3">内容 3</van-tab>
                </van-tabs>
                <van-tabs type="card">
                    <van-tab v-for="index in 8" :title="'标签 ' + index">内容 {{ index }}</van-tab>
                </van-tabs>
                <van-tabs v-model="tabActive">
                    <van-tab v-for="index in 2">
                        <div slot="title">
                            <van-icon name="more-o" />选项
                        </div>
                        内容 {{ index }}
                    </van-tab>
                </van-tabs>
            </section>

            <section>
                <h4>Sidebar 侧边导航</h4>
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" info="99+" />
                </van-sidebar>
            </section>

            <section>
                <h4>Pagination 分页</h4>
                <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
                <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
                <van-pagination
                    v-model="currentPage"
                    :total-items="125"
                    :show-page-size="3"
                    force-ellipses
                />
            </section>

            <section>
                <h4>NavBar 导航栏</h4>
                <van-nav-bar
                    title="标题"
                    left-text="返回"
                    right-text="按钮"
                    left-arrow
                    @click-left
                    @click-right
                />
                <van-nav-bar title="标题" left-text="返回" left-arrow>
                    <van-icon name="search" slot="right" />
                </van-nav-bar>
            </section>

            <section>
                <h4>IndexBar 索引栏</h4>
                <van-index-bar>
                    <van-index-anchor index="A" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="C" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="D" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="E" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>

                <van-index-bar :index-list="indexList">
                    <van-index-anchor index="1">标题1</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="2">标题2</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />...
                </van-index-bar>
            </section>

            <section>
                <h4>Grid 宫格</h4>
                <van-grid>
                    <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
                </van-grid>
                <van-grid :column-num="3">
                    <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
                </van-grid>
                <van-grid :border="false" :column-num="3">
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                    </van-grid-item>
                </van-grid>
                <van-grid square>
                    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
                <van-grid :gutter="10">
                    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
                <van-grid clickable :column-num="2">
                    <van-grid-item icon="home-o" text="路由跳转" to="/" />
                    <van-grid-item icon="search" text="URL 跳转" url="https://www.baidu.com" />
                </van-grid>
            </section>

            <section>
                <h4>Tag 标记</h4>
                <van-tag>标签</van-tag>
                <van-tag type="danger">标签</van-tag>
                <van-tag type="primary">标签</van-tag>
                <van-tag type="success">标签</van-tag>
                <br />
                <van-tag plain>标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="primary">标签</van-tag>
                <van-tag plain type="success">标签</van-tag>
                <br />
                <van-tag round>标签</van-tag>
                <van-tag round type="danger">标签</van-tag>
                <van-tag round type="primary">标签</van-tag>
                <van-tag round type="success">标签</van-tag>
                <br />
                <van-tag mark>标签</van-tag>
                <van-tag mark type="danger">标签</van-tag>
                <van-tag mark type="primary">标签</van-tag>
                <van-tag mark type="success">标签</van-tag>
                <br />
                <van-tag color="#f2826a">标签</van-tag>
                <van-tag color="#f2826a" plain>标签</van-tag>
                <van-tag color="#7232dd">标签</van-tag>
                <van-tag color="#7232dd" plain>标签</van-tag>
                <van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag>
                <br />
                <van-tag>标签</van-tag>
                <van-tag size="medium">标签</van-tag>
                <van-tag size="large">标签</van-tag>
            </section>

            <section class="demo-swipe">
                <h4>Swipe 轮播</h4>
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <br />
                <van-swipe :autoplay="3000" style="height: 200px;" vertical>
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <br />
                <van-swipe :loop="false" :width="300">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <br />
                <van-swipe @change="swipeOnChange">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>

                    <div class="custom-indicator" slot="indicator">{{ swipeCurrent + 1 }}/4</div>
                </van-swipe>
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in imageList" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </section>

            <section>
                <h4>Sticky 粘性布局</h4>
                <van-sticky>
                    <van-button type="primary">基础用法</van-button>
                </van-sticky>
                <van-sticky :offset-top="50">
                    <van-button style="margin-left: 115px;" type="info">吸顶距离</van-button>
                </van-sticky>

                <div ref="container" style="height: 150px;">
                    <van-sticky :container="container">
                        <van-button style="margin-left: 215px;" type="warning">指定容器</van-button>
                    </van-sticky>
                </div>
            </section>

            <section>
                <h4>Steps 步骤条</h4>
                <van-steps :active="stepActive" active-icon="success" active-color="#38f">
                    <van-step>买家下单</van-step>
                    <van-step>商家接单</van-step>
                    <van-step>买家提货</van-step>
                    <van-step>交易完成</van-step>
                </van-steps>
                <van-button
                    type="primary"
                    size="small"
                    @click="stepActive>2 ? (stepActive=0) : stepActive++"
                >下一步</van-button>&nbsp;
                <van-steps direction="vertical" :active="0">
                    <van-step>
                        <h3>【城市】物流状态1</h3>
                        <p>2016-07-12 12:40</p>
                    </van-step>
                    <van-step>
                        <h3>【城市】物流状态2</h3>
                        <p>2016-07-11 10:00</p>
                    </van-step>
                    <van-step>
                        <h3>快件已发货</h3>
                        <p>2016-07-10 09:30</p>
                    </van-step>
                </van-steps>
            </section>

            <section>
                <h4>Skeleton 骨架屏</h4>
                <van-skeleton title :row="3" />
                <van-button type="primary" size="small" @click="skeletonLoading=false">显示子组件</van-button>&nbsp;
                <van-skeleton title avatar :row="3" :loading="skeletonLoading">
                    <div>实际内容</div>
                </van-skeleton>
            </section>

            <section>
                <h4>Progress 进度条</h4>
                <van-progress :percentage="50" />
                <br />
                <van-progress inactive :percentage="50" />
                <br />
                <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
                <br />
                <van-progress pivot-text="红色" color="#f44" :percentage="50" />
                <br />
                <van-progress
                    :percentage="75"
                    pivot-text="紫色"
                    pivot-color="#7232dd"
                    color="linear-gradient(to right, #be99ff, #7232dd)"
                />
            </section>

            <section>
                <h4>Panel 面板</h4>
                <van-panel title="标题" desc="描述信息" status="状态">
                    <div>内容</div>
                </van-panel>
                <van-panel title="标题" desc="描述信息" status="状态">
                    <div>内容</div>
                    <div slot="footer">
                        <van-button size="small">按钮</van-button>
                        <van-button size="small" type="danger">按钮</van-button>
                    </div>
                </van-panel>
            </section>

            <section>
                <h4>NoticeBar 通知栏</h4>
                <van-notice-bar
                    text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
                    left-icon="volume-o"
                    mode="closeable"
                />
                <br />
                <van-notice-bar
                    :scrollable="false"
                    mode="link"
                >足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</van-notice-bar>
                <br />
                <van-notice-bar
                    wrapable
                    :scrollable="false"
                >足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</van-notice-bar>
                <br />
                <van-notice-bar
                    color="#1989fa"
                    background="#ecf9ff"
                    left-icon="info-o"
                >足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</van-notice-bar>
            </section>

            <section>
                <h4>List 列表</h4>
                <van-list
                    v-model="listLoading"
                    :finished="listFinished"
                    finished-text="没有更多了"
                    @load="listOnLoad"
                >
                    <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
            </section>

            <section class="demo-lazyload">
                <h4>Lazyload 图片懒加载</h4>

                <img v-for="img in imageList" v-lazy="img" />
            </section>

            <section>
                <h4>ImagePreview 图片预览</h4>
                <van-button type="primary" @click="showImagePreview">预览图片</van-button>&emsp;
            </section>

            <section>
                <h4>Divider 分割线</h4>
                <van-divider />
                <van-divider>文字</van-divider>
                <van-divider content-position="left">文字</van-divider>
                <van-divider content-position="right">文字</van-divider>
                <van-divider dashed>文字</van-divider>
                <van-divider
                    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
                >文字</van-divider>
            </section>

            <section>
                <h4>CountDown 倒计时</h4>
                <van-count-down :time="countDownTime" />
                <van-count-down :time="countDownTime" format="DD 天 HH 时 mm 分 ss 秒" />
                <van-count-down millisecond :time="countDownTime" format="HH:mm:ss:SSS" />
                <van-count-down :time="countDownTime">
                    <template v-slot="timeData">
                        <span class="item">{{ timeData.hours }}</span>
                        <span class="item">{{ timeData.minutes }}</span>
                        <span class="item">{{ timeData.seconds }}</span>
                    </template>
                </van-count-down>

                <van-count-down
                    ref="countDown"
                    millisecond
                    :time="3000"
                    :auto-start="false"
                    format="ss:SSS"
                    @finish="countDownFinish"
                />
                <van-grid clickable>
                    <van-grid-item text="开始" icon="play-circle-o" @click="countDownStart" />
                    <van-grid-item text="暂停" icon="pause-circle-o" @click="countDownPause" />
                    <van-grid-item text="重置" icon="replay" @click="countDownReset" />
                </van-grid>
            </section>

            <section>
                <h4>Collapse 折叠面板</h4>
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
                    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                    <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
                </van-collapse>

                <van-collapse v-model="accordionActiveNames" accordion>
                    <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
                    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
                </van-collapse>
                <van-collapse v-model="activeNames">
                    <van-collapse-item name="1">
                        <div slot="title">
                            标题1
                            <van-icon name="question-o" />
                        </div>内容
                    </van-collapse-item>

                    <van-collapse-item title="标题2" name="2" icon="shop-o">内容</van-collapse-item>
                </van-collapse>
            </section>

            <section>
                <h4>Circle 环形进度条</h4>
                <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" />
                <br />
                <van-button type="primary" @click="currentRate+=20;">增加</van-button>&emsp;
                <van-button type="primary" @click="currentRate-=20">减少</van-button>&emsp;
                <br />
                <br />
                <van-circle
                    v-model="currentRate"
                    color="#07c160"
                    fill="#fff"
                    size="120px"
                    layer-color="#ebedf0"
                    :text="text"
                    :rate="rate"
                    :speed="100"
                    :clockwise="false"
                    :stroke-width="60"
                />
            </section>

            <section>
                <h4>Toast 轻提示</h4>
                <van-button type="primary" @click="$toast('提示内容');">文字提示</van-button>&emsp;
                <van-button type="primary" @click="$toast('这是一条长文字提示，超过一定字数就会换行');">长文字提示</van-button>&emsp;
                <br />
                <br />
                <van-button
                    type="primary"
                    @click="$toast.loading({
                      mask: true,
                      message: '加载中...'
                    });"
                >加载提示</van-button>&emsp;
                <br />
                <br />
                <van-button type="primary" @click="$toast.success('成功文案');">成功提示</van-button>&emsp;
                <van-button type="primary" @click="$toast.fail('失败文案');">失败提示</van-button>&emsp;
                <br />
                <br />
                <van-button
                    type="primary"
                    @click="$toast({
                    message: '自定义图标',
                    icon: 'like-o'
                  });"
                >自定义图标</van-button>&emsp;
                <van-button
                    type="primary"
                    @click="$toast({
                    message: '展示图片',
                    icon: 'https://img.yzcdn.cn/vant/logo.png'
                  });"
                >展示图片</van-button>&emsp;
                <br />
                <br />
                <van-button type="primary" @click="loastAdvancedUsage">高级用法</van-button>&emsp;
            </section>
            <section>
                <h4>SwipeCell 滑动单元格</h4>
                <van-swipe-cell>
                    <template slot="left">
                        <van-button square type="primary" text="选择" />
                    </template>

                    <van-cell :border="false" title="单元格" value="内容" />

                    <template slot="right">
                        <van-button square type="danger" text="删除" />
                        <van-button square type="primary" text="收藏" />
                    </template>
                </van-swipe-cell>
                <van-swipe-cell :on-close="onCloseSwipeCell">
                    <template slot="left">
                        <van-button square type="primary" text="选择" />
                    </template>

                    <van-cell :border="false" title="单元格" value="内容" />

                    <template slot="right">
                        <van-button square type="danger" text="删除" />
                    </template>
                </van-swipe-cell>
            </section>
            <section>
                <h4>下拉刷新refreshCount</h4>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <p>刷新次数: {{ refreshCount }}</p>
                </van-pull-refresh>
            </section>
            <section>
                <h4>Overlay 遮罩层</h4>
                <van-button type="primary" text="显示遮罩层" @click="overlayShow = true" />

                <van-overlay :show="overlayShow" @click="overlayShow = false" />
            </section>
            <section>
                <h4>Notify 消息提示</h4>
                <van-button type="primary" @click="$notify('通知内容');">显示消息通知</van-button>&emsp;
                <van-button
                    type="primary"
                    @click="$notify({
                    message: '通知内容',
                    duration: 1000,
                    background: '#1989fa'
                  });"
                >显示消息通知</van-button>&emsp;
            </section>
            <section>
                <h4>Loading 加载</h4>
                <van-loading />
                <van-loading type="spinner" />
                <van-loading color="#1989fa" />
                <van-loading type="spinner" color="#1989fa" />
                <van-loading size="24px">加载中...</van-loading>
                <van-loading size="24px" vertical>加载中...</van-loading>
            </section>

            <section>
                <h4>DropdownMenu 下拉菜单</h4>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="dropdownValue1" :options="option1" />
                    <van-dropdown-item v-model="dropdownValue2" :options="option2" disabled />
                </van-dropdown-menu>
                <van-dropdown-menu direction="up">
                    <van-dropdown-item v-model="dropdownValue1" :options="option1" />
                    <van-dropdown-item title="筛选" ref="item">
                        <van-switch-cell v-model="dropdownSwitch1" title="包邮" />
                        <van-switch-cell v-model="dropdownSwitch2" title="团购" />
                        <van-button block type="info">确认</van-button>
                    </van-dropdown-item>
                </van-dropdown-menu>
            </section>
            <section>
                <h4>Dialog 弹出框</h4>

                <van-button
                    type="primary"
                    @click="$dialog.alert({
                      title: '标题',
                      message: '弹窗内容'
                    }).then(() => {
                      // on close
                    })"
                >提示弹框</van-button>&emsp;
                <van-button
                    type="primary"
                    @click="$dialog.confirm({
                    title: '标题',
                    message: '弹窗内容'
                  }).then(() => {
                    // on confirm
                  }).catch(() => {
                    // on cancel
                  });"
                >确认弹框</van-button>&emsp;
                <br />
                <br />
                <van-button
                    type="primary"
                    @click="$dialog.confirm({
                      title: '标题',
                      message: '弹窗内容',
                      beforeClose(action, done) {
                      if (action === 'confirm') {
                         window.setTimeout(done, 1000);
                      } else {
                        done();
                      }
                    }
                    });"
                >异步关闭</van-button>&emsp;
                <van-dialog v-model="dialogShow" title="标题" show-cancel-button>
                    <p>自定义内容</p>
                </van-dialog>
                <van-button type="primary" @click="dialogShow =true">组件调用</van-button>&emsp;
            </section>
            <section>
                <h4>ActionSheet 上拉菜单</h4>
                <van-action-sheet
                    v-model="actionSheetShow"
                    :actions="actionSheetActions"
                    cancel-text="取消"
                />
                <van-button type="primary" @click="actionSheetShow=true">弹出菜单</van-button>
                <van-action-sheet v-model="actionSheetShow2" title="标题">
                    <p>内容</p>
                </van-action-sheet>&emsp;
                <van-button type="primary" @click="actionSheetShow2=true">弹出菜单</van-button>
            </section>
            <section>
                <h4>Uploader 文件上传</h4>
                <van-uploader :after-read="afterRead" />
                <br />
                <van-uploader v-model="fileList" multiple :max-count="2" />
                <br />
                <van-uploader>
                    <van-button icon="photo" type="primary">上传图片</van-button>
                </van-uploader>
            </section>
            <section>
                <h4>SwitchCell 开关单元格</h4>
                <van-cell-group>
                    <van-switch-cell v-model="switchChecked" title="标题" />
                </van-cell-group>
            </section>
            <section>
                <h4>Switch 开关</h4>
                <van-switch v-model="switchChecked" />
                <van-switch v-model="switchChecked" disabled />
                <van-switch v-model="switchChecked" loading />
                <van-switch v-model="switchChecked" size="24px" />
                <van-switch v-model="switchChecked" active-color="#f00" inactive-color="#000" />
            </section>
            <section>
                <h4>Stepper 步进器</h4>
                <van-stepper v-model="stepperValue" />
                <van-stepper v-model="stepperValue" step="2" />
                <van-stepper v-model="stepperValue" min="5" max="8" />
                <van-stepper v-model="stepperValue" integer />
                <van-stepper v-model="stepperValue" disabled />
                <van-stepper v-model="stepperValue" input-width="80px" button-size="62px" />
            </section>
            <section>
                <h4>Slider 滑块</h4>
                <van-slider v-model="sliderValue" @change />
                <br />
                <van-slider v-model="sliderValue" disabled />
                <br />
                <van-slider v-model="sliderValue" :step="10" />
                <br />
                <van-slider v-model="sliderValue" bar-height="4px" active-color="#f44" />
                <br />
                <van-slider v-model="sliderValue" active-color="#f44">
                    <div slot="button" style="background-color: red;">{{ sliderValue }}</div>
                </van-slider>
                <br />
                <div :style="{ height: '100px' }">
                    <van-slider v-model="sliderValue" vertical />
                </div>
            </section>
            <section>
                <h4>Search 搜索</h4>
                <van-search placeholder="请输入搜索关键词" v-model="value" />
                <form action="/">
                    <van-search
                        v-model="value"
                        placeholder="请输入搜索关键词,监听对应事件"
                        show-action
                        @search
                        @cancel
                    />
                </form>
                <van-search
                    label="地址"
                    v-model="value"
                    placeholder="请输入搜索关键词, 自定义行动按钮"
                    show-action
                    shape="round"
                    @search
                >
                    <div slot="action" @click>搜索</div>
                </van-search>
            </section>

            <section>
                <h4>Rate 评分</h4>
                <van-rate v-model="rateValue" />
                <van-rate v-model="rateValue" icon="like" void-icon="like-o" />
                <van-rate
                    v-model="rateValue"
                    :size="25"
                    color="#f44"
                    void-icon="star"
                    void-color="#eee"
                />
                <van-rate v-model="rateValue2" allow-half void-icon="star" void-color="#eee" />
                <van-rate v-model="rateValue" :count="6" />
                <van-rate v-model="rateValue" disabled />
                <van-rate v-model="rateValue" readonly />
            </section>

            <section>
                <h4>Radio 单选框</h4>
                <van-radio-group v-model="radio">
                    <van-cell-group>
                        <van-cell title="单选框 1" clickable @click="radio = '1'">
                            <van-radio slot="right-icon" name="1" />
                        </van-cell>
                        <van-cell title="单选框 2" clickable @click="radio = '2'">
                            <van-radio slot="right-icon" name="2" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>

                <van-radio-group v-model="radio">
                    <van-radio name="1">单选框 1</van-radio>
                    <van-radio name="2" checked-color="#f00">单选框 2</van-radio>
                    <van-radio name="3" disabled>单选框 3</van-radio>
                    <van-radio name="4">
                        单选框 4
                        <img
                            slot="icon"
                            slot-scope="props"
                            :src="props.checked ? icon.active : icon.inactive"
                        />
                    </van-radio>
                </van-radio-group>
            </section>

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
import areaList from '@/utils/lib/area-information';
export default {
    name: 'home',
    mounted() {
        this.container = this.$refs.container;
    },
    data() {
        return {
            chosenContactId: null,
            editingContact: {},
            showList: false,
            showEdit: false,
            isEdit: false,
            contacList: [
                {
                    name: '张三',
                    tel: '13000000000',
                    id: 0
                }
            ],
            chosenAddressId: '1',
            addressListList: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address:
                        '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            disabledList: [
                {
                    id: '3',
                    name: '王五',
                    tel: '1320000000',
                    address: '浙江省杭州市滨江区江南大道 15 号'
                }
            ],
            areaList,
            searchResult: [],
            treeSelectItems: [
                {
                    // 导航名称
                    text: '所有城市',
                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: '温州',
                            // id，作为匹配选中状态的标识
                            id: 330300,
                            // 禁用选项
                            disabled: true
                        },
                        {
                            text: '杭州',
                            id: 330100
                        },
                        {
                            text: '南京',
                            id: 320100
                        },
                        {
                            text: '无锡',
                            id: 320200
                        }
                    ]
                },
                {
                    text: '浙江',

                    children: [
                        {
                            text: '杭州',
                            id: 330100
                        },
                        {
                            text: '温州',
                            id: 330300
                        }
                    ]
                },
                {
                    // 导航名称
                    text: '江苏',
                    // 该导航下所有的可选项
                    children: [
                        {
                            text: '南京',
                            id: 320100
                        },
                        {
                            text: '无锡',
                            id: 320200
                        }
                    ]
                }
            ],
            // 左侧高亮元素的index
            mainActiveIndex: 0,
            // 被选中元素的id
            treeSelectActiveId: 1,
            tabActive: 0,
            activeKey: 0,
            currentPage: 1,
            indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            swipeCurrent: 0,
            container: null,
            stepActive: 1,
            skeletonLoading: true,
            list: [],
            listLoading: false,
            listFinished: false,
            imageList: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg'
            ],
            countDownTime: 30 * 60 * 60 * 1000,
            accordionActiveNames: '1',
            activeNames: ['1'],
            rate: 100,
            currentRate: 0,
            refreshCount: 0,
            isLoading: false,
            overlayShow: false,
            dropdownValue1: 0,
            dropdownValue2: 'a',
            dropdownSwitch1: false,
            dropdownSwitch2: false,
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' }
            ],
            dialogShow: false,
            actionSheetShow: false,
            actionSheetShow2: false,
            actionSheetActions: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' },
                { name: '选项', loading: true },
                { name: '禁用选项', disabled: true }
            ],
            fileList: [{ url: 'https://img.yzcdn.cn/vant/cat.jpeg' }],
            switchChecked: true,
            stepperValue: 2,
            sliderValue: 20,
            searchValue: '',
            rateValue: 1,
            rateValue2: 2.5,
            radio: '1',
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
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%';
        },
        cardType() {
            return this.chosenContactId !== null ? 'edit' : 'add';
        }
    },
    methods: {
        onAdd() {
            this.$toast('新增地址');
        },

        onEdit(item, index) {
            this.$toast('编辑地址:' + index);
        },
        addressEditOnSave() {
            this.$toast('save');
        },
        addressEditOnDelete() {
            this.$toast('delete');
        },
        addressEditOnChangeDetail(val) {
            this.searchResult = val ? this.searchResult : [];
        },
        treeSelectOnClickNav(index) {
            this.mainActiveIndex = index;
        },
        treeSelectOnClickItem(data) {
            this.treeSelectActiveId = data.id;
        },
        swipeOnChange(index) {
            this.swipeCurrent = index;
        },
        listOnLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.listLoading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.listFinished = true;
                }
            }, 500);
        },
        showImagePreview() {
            this.$imagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg'
                ],
                startPosition: 0,
                showIndicators: true,
                lazyLoad: true,
                onClose() {
                    this.$toast('关闭了');
                }
            });
        },
        countDownStart() {
            this.$refs.countDown.start();
        },
        countDownPause() {
            this.$refs.countDown.pause();
        },
        countDownReset() {
            this.$refs.countDown.reset();
        },
        countDownFinish() {
            this.$toast('倒计时结束');
        },
        loastAdvancedUsage() {
            const toast = this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                loadingType: 'spinner',
                message: '倒计时 3 秒'
            });

            let second = 3;
            const timer = setInterval(() => {
                second--;
                if (second) {
                    toast.message = `倒计时 ${second} 秒`;
                } else {
                    clearInterval(timer);
                    this.$toast.clear();
                }
            }, 1000);
        },
        // clickPosition 表示关闭时点击的位置
        onCloseSwipeCell(clickPosition, instance) {
            switch (clickPosition) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close();
                    break;
                case 'right':
                    this.$dialog
                        .confirm({
                            message: '确定删除吗？'
                        })
                        .then(() => {
                            instance.close();
                        });
                    break;
            }
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.refreshCount++;
            }, 500);
        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
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

.van-radio img {
    height: 20px;
}
.item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
}

.demo-lazyload {
    padding-right: 16px;
    padding-left: 16px;
}
.demo-lazyload img,
.demo-lazyload div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: 16px;
    padding: 16px;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 16px;
    background-size: 315px 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.demo-lazyload .van-doc-demo-block__title,
.demo-lazyload .van-doc-demo-section__title {
    padding-left: 0;
}
.demo-swipe {
    padding-bottom: 30px;
}
.demo-swipe .van-swipe {
    cursor: pointer;
}
.demo-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
}
.demo-swipe .van-swipe-item:nth-child(even) {
    background-color: #39a9ed;
}
.demo-swipe .van-swipe-item:nth-child(odd) {
    background-color: #66c6f2;
}
.demo-swipe .van-swipe img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    padding: 30px 60px;
    background-color: #fff;
    pointer-events: none;
}
.demo-swipe--vertical .van-swipe-item {
    line-height: 200px;
}
.demo-swipe .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>

