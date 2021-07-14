<template>
  <div id="app">
    <TabBar>
      <TabBarItem path="/home" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/home.svg">
        <img slot="item-icon-active" src="./assets/img/homefill.svg">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/qr_code_light.svg">
        <img slot="item-icon-active" src="./assets/img/circlefill.svg">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/cart.svg">
        <img slot="item-icon-active" src="./assets/img/cartfill.svg">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/my.svg">
        <img slot="item-icon-active" src="./assets/img/my_fill_light.svg">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
    <router-view></router-view>

  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from "./components/tabbar/TabBarItem.vue"


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
    
  }
}
</script>

<style>

</style>
