<template>
  <div class="router-view content--cal">
    <r-calendar
      @click-cal-day="fetchItems"
      :default-select-date="dateSelect"
    ></r-calendar>
    <r-todo-item-list
      :items="items"
      :is-checkable="true"
      v-if="items != null && items.length > 0"
    ></r-todo-item-list>


    <div class="itm-lst" v-else>
      <img src="../../assets/日程.png" alt="">
      <p class="shouye">还没有日程，赶快去创建吧</p>
    </div>
    <div class="bot" style="position: fixed;bottom: 0;left: 0;right: 0;">
      <div class="left">
        <i class="icon2-schedule richeng"></i>
        <p class="sche">日程</p>
      </div>
      <div class="mid">
        <i class="icon2-add-circle add" ></i>
      </div>
      <div class="right">
        <i class="icon2-member me"></i>

        <p class="my">我</p>
      </div>
    </div>
    <!--<div class="float-action-button" v-touch:tap="showCreate">-->
    <!--<i class="icon icon-add"></i>-->
    <!--</div>-->
  </div>
</template>
<script>
  import Calendar from 'com/sche/Calendar';
  import TodoItemList from 'com/sche/TodoItemList';

  import moment from 'moment';

  export default {
    name: 'ScheduleView',
    data () {
      return {
        titleName: '日程'
      }
    },
    computed: {
      dateSelect () {
        var strDate = this.$store.state.schedule.strCurrentDate;
        return  strDate? moment(strDate, 'YYYY-MM-DD').toDate() : new Date();
      },
      items(){
        return this.$store.state.schedule.items;
      },
      itemCount(){
        return this.$store.state.schedule.items ? this.$store.state.schedule.items.length : -1
      }
    },
    components: {
      'r-calendar': Calendar,
      'r-todo-item-list': TodoItemList
    },
    methods: {
      fetchItems(strDate){
        this.$store.dispatch('fetchScheduleItems', strDate)
      },
      showCreate(){
        this.$router.push('/todo/new/schedule');
      }
    },
    mounted () {
      rsqadmg.exec('setTitle', {title: this.titleName});
      var btnParams;
      var that = this;
      btnParams = {
        btns: [{key: 'toInbox', name: '收纳箱'}],
        success: function(res){
          if(res.key == 'toInbox'){
            that.$router.push('/inbox');
          }
        }
      };
      rsqadmg.execute('setOptionButtons', btnParams);
      this.$store.dispatch('setNav', true)
    }
  }
</script>
<style scoped>
  @import "icomoon2.css";
  .bot{

    height: 1.306rem;
  }

  .richeng{
    font-size: 22px;
  }
  .sche{
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #999999;
    letter-spacing: 0;
    margin:0;
    padding:0;
    margin-top:-8px;
  }
  .me{
    font-size: 22px;
  }
  .my{
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #999999;
    letter-spacing: 0;
    margin: 0;
    padding:0;
    margin:0 auto;
    margin-top:-8px;
  }
  .left{
    position: absolute;
    left: 2.053rem;
    bottom:1px;
    padding-bottom:5px;
  }
  .right{
    text-align: center;
    padding-bottom:5px;
    position: absolute;
    right: 2.11rem;
    bottom:1px;
  }
  .mid{
    text-align: center;



  }
  .add{
    color:#4D93DE;
    font-size: 29.6px;


  }
  .bot:after{
    content:'';
    display: block;
    clear: both;
  }
  .itm-lst{
    text-align: center;
    height:12.693rem;

  }
  .shouye{
    padding: 0;
    margin:0;
    margin-top:0.418rem;

  }
  img{
    width: 1.866rem;
    height: 1.866rem;
    margin-top:3.653rem ;
  }
  .content--cal{
      height: 100%;
  }

</style>
