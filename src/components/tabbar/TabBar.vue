<template>
  <div id="tab-bar">
      <!-- <div class="tab-bar-item">
          <img src="../../assets/img/home.svg">
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
          <img src="../../assets/img/qr_code_light.svg">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
          <img src="../../assets/img/cart.svg">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
          <img src="../../assets/img/my.svg">
        <div>我的</div>
      </div> -->
    <slot></slot>
    </div>
</template>

<script>

export default {
  name:"TabBar"
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100,100,100, .1);
}

</style>