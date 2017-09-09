<template>
  <div id="app" class="rsq-webview">

    <router-view></router-view>

    <r-nav v-if="isAddNav" v-show="isShowNav"></r-nav>
  </div>
</template>

<script>
  import Nav from 'com/Nav'

  export default {
    name: 'app',
    computed: {
      isAddNav () {
        return this.$store.state.env.isAddNav
      },
      isShowNav () {
        return this.$store.state.env.isShowNav
      }
    },
    components: {
      'r-nav': Nav
    }
  }
</script>
<style>

  .rsq-webview{
    height:100%;
  }
  .shouye{
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #55A8FD;
    letter-spacing: 0;

  }




</style>
