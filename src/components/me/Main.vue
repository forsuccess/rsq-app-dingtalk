<template>
  <div class="">
  <div class="top">
    <div class="tupian">
    <avatar :src="loginUser.authUser.avatar"
            :username="loginUser.authUser.name"
            :size="65"></avatar>
    </div>
    <p>李永州</p>
  </div>
  <div class="bottom">
    <div>
      <p>更新说明</p>

      <i class="icon2-arrow-right-small daxiao"></i>
    </div>
    <div>
      <p>联系我们</p>
      <span class="tel">010-57294778</span>
    </div>
    <div>
      <v-touch  @tap="gotokefu" :class="{'is-active': '/me' == currentPath}">
      <p>在线客服</p>
        <i class="icon2-arrow-right-small daxiao"></i>
      </v-touch>
    </div>
    <div>
      <p>电脑访问日事清</p>
      <i class="icon2-arrow-right-small daxiao"></i>
    </div>
  </div>
  </div>
</template>
<script>
  import Avatar from 'com/pub/TextAvatar'

export default {
  data () {
    return {}
  },
  computed: {
    loginUser () {
      return this.$store.state.loginUser
    }
  },
  components: {
    'avatar': Avatar
  },
  methods: {
    gotokefu(){

  this.$router.push('/me/kefu');

    }
  },
  mounted () {
    rsqadmg.exec('setOptionButtons', {hide: true})
    this.$store.dispatch('setNav', true)
  }
}
</script>
<style scoped >
  @import "../../assets/fonts/icomoon2.css";




  .top{
    text-align: center;
    height: 200px;
    background-color:#3E86D6;
  }
  .top p{

    margin-top:5px;

  }
  .tupian{
    display: inline-block;
    border: 2px solid #FFFFFF;
    margin:0 auto;
    border-radius: 100px;
    width: 65px;
    height: 65px;
    margin-top: 47px;

  }
  .bottom{

    background: #FFFFFF;
    height: 190px;
  }
  .bottom>div{
    padding-top: 16px ;
    padding-left: 13px ;

    color:#E3E3E3;
  }
  .bottom p{
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #222222;
    line-height: 22px;

  }
  .bottom span{
    float: right;
    margin-right:10px;
    margin-top:4px;
  }
  .bottom span:after{
    display: block;
    clear: both;
    content:'';
  }
  .tel{
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #55A8FD;
    letter-spacing: -0.36px;
    margin-right: 15px;
  }

  .daxiao{
    font-size: 20px;
    float: right;
    color:#999999;
    margin-right: 10px;
    margin-top: 5.5px;

  }


</style>
