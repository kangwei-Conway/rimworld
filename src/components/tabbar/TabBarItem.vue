<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- <img src="../../assets/img/home.svg">
        <div>首页</div> -->
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else ><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
  
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
      return{
          // isActive:true
      }
  },
  computed:{
  isActive(){
    return this.$route.path.indexOf(this.path)
  },
  activeStyle(){
    return this.isActive ? {} : {color:this.activeColor}
  }
  },
  methods:{
    itemClick(){
       console.log(this.$route.path.indexOf(this.path))
      this.$router.replace(this.path).catch(err => {
   return(err)
})
    },
  }
}
</script>
 
<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
}
.tab-bar-item img{
    width:24px;
    height:24px;
    margin-top:3px;
    vertical-align: middle;
}
</style>