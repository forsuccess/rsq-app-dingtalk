<template>
	<div class="root">
    <input type="text" PLACEHOLDER="在这里写下想法"  v-model="editItem.ptitle">
    <!--<span class="create">创建</span>-->
    <ul>
      <li>
        <span class="left">测试数据</span>
        <!--<span class="right">我收到的</span>-->
      </li>
      <li><span class="left">测试数据</span></li>
      <li><span class="left">测试数据</span></li>
      <li><span class="left">测试数据非常长的数据测试数据非常长的数据非常长</span></li>
    </ul>
	</div>
</template>
<script>
  import dateUtil from 'ut/dateUtil';
export default {
  data () {
    return {
      editItem:{
        ptitle:'',



        dates: null,
        startDate: null,
        endDate: null,



      }
    }
  },
  methods: {
    getPlanedTime(){
      var ei = this.editItem;
      var result = dateUtil.backend2frontend(ei.dates, ei.startDate, ei.endDate);
      return (result && result.dateResult) ? result.dateResult[0] : null;
    },
    getinboxItem(){
      console.log("dispath以前")
      var planTime = this.getPlanedTime();
//					if(!planTime){
//						return rsqadmg.execute('alert', {message: '请选择任务日期'});
//					}
      //  坑爹啊。。。格式不统一，需要做额外的hack
     // this.editItem.pPlanedTime = dateUtil.dateNum2Text(planTime, '-') + ' 00:00:00';
      this.$store.dispatch('createInboxItem', {props: this.editItem})
        .then(function(){
          console.log("马上就创建成功了")
          rsqadmg.exec('hideLoader');
          rsqadmg.execute('toast', {message: '创建成功'});
          //that.$router.replace(window.history.back());
        });
    }
    },

  computed:{
    inboxitems(){
      return this.$store.state.inbox.items;
    }
  },
  mounted () {
    this.$store.dispatch('setNav', true)
  }
}
</script>
<style scoped>
 .root{
   position:relative;
 }
 input::-webkit-input-placeholder { /* WebKit browsers */
   font-family: PingFangSC-Regular;
   font-size: 17px;
   color: #999999;
   line-height: 22px;
 }
 input{
    height:1.226rem;
    background: #FFFFFF;
    border-bottom:0.5px solid #E3E3E3;
    border-top:0.5px solid #E3E3E3;
    margin-top: 1.974rem;
   padding-left:0.3rem;
  }

  ul{
    background-color: white;
    margin-top:0.4rem;
    border-bottom:0.5px solid #E3E3E3;
    border-top:0.5px solid #E3E3E3;
    padding-left:4.3%;
  }
  .left{

    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #222222;
     text-overflow: ellipsis;

  }
  span{
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    width:6rem;
    /*line-height: 1.158rem;;*/
  }
  li{
    border-bottom: 0.5px solid #E3E3E3;


  }

  li:last-child{
    border-bottom: none;
  }
  .right{
    float: right;
    margin-top: 3%;
    margin-right: 3.2%;

    border:0.5px solid #8C8C8C;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #8C8C8C;
    border-radius: 2px;
  }
  .create{
    display: block;
    text-align: center;
    border: 1px solid #55A8FD;
    border-radius: 2px;
    height: 9%;
    width:14.1%;
    font-size: 16px;
    color:#55A8FD;
    position: absolute;
    top:2.25rem;
    left: 82.4%;
  }

</style>
