<template>
  <div>
  <ul>
    <li>

      <i class="icon2-check-box select unfinish"></i>
      <span class="content">计划任务框设计</span>

      <span class="date">延期11天</span>

    </li>
    <li>
      <i class="icon2-check-box select unfinish"></i>
      <span class="content">快捕课堂，快半开发管理计划</span>

    </li>
    <li>
      <i class="icon2-seleced-mult select finish"></i>
      <span class="finished">测试</span>

    </li>
    <li>
      <i class="icon2-seleced-mult select finish"></i>
      <span class="finished">多级子任务框设计</span>

    </li>

  </ul>
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
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  ul{
    background-color: white;
  }
  .left{
    /*position: absolute;*/

  }
  .select{
    font-size: 17px;
  }

  .unfinish{
  position: absolute;
    top:0.56rem;
  }

  .finish{

    position: absolute;
    top:0.56rem;
    color:lightgray;
  }
  .finished{
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color:lightgray;
    text-decoration: line-through;
  }
  span{

    margin-left: 0.8rem;
    font-family:PingFangSC-Regular;
    font-size: 17px;
    color: #333333;

  }
  .date{
    position:absolute ;
    top:0;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #FF7A7A;
    letter-spacing: 0;
    right:2.7%;


  }
  ul{
    position: relative;
    margin-top:3.806rem;
    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;
    padding-left: 3%;
  }
  li{
    padding:0;
    line-height:1.612rem ;
    height: 1.612rem;
    position: relative;
    border-bottom:0.5px solid #DADADA ;
  }
  li:last-child{
    border: none;
  }
  .bot{
    border-top:0.5px solid #DADADA ;
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
    padding:0;
    margin:0 auto;
    margin-top:-8px;
  }
  .left{
    position: absolute;
    left: 2.053rem;
    bottom:1px;
    padding-bottom:5px;
    /*display: inline-block;*/
    /*width: 40%;*/
    /*text-align: center;*/
  }
  .right{
    text-align: center;
    padding-bottom:5px;
    position: absolute;
    right: 2.11rem;
    bottom:1px;
    /*display: inline-block;*/
    /*width: 40%;*/
    /*text-align: center;*/
  }
  .mid{
    /*display: inline-block;*/

    /*width: 20%;*/
    text-align: center;
    height: 1.306rem;
    line-height: 1.306rem;


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

  img{
    width: 1.866rem;
    height: 1.866rem;
    margin-top:3.653rem ;
  }

</style>
