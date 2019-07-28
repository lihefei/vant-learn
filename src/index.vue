<template>
    <div class="index">
        <router-view></router-view>
        <div>
            <van-tabbar route>
                <van-tabbar-item to="/home" icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item to="/news" icon="search" dot>标签</van-tabbar-item>
                <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
                <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {};
    }
};
</script>

<style scoped>
</style>
