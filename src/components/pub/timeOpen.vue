<template>
  <div class="root">
    <div class="whole">
      <span>全天</span>
      <input class="mui-switch" type="checkbox" checked>
    </div>
    <ul>
      <li class="start">
        <span>开始时间</span>
        <span class="time">19:15</span>
        <i class="icon2-arrow-right-small arrow"></i>
      </li>
      <li class="end">
        <span>结束时间</span>
        <span class="time">19:22</span>
        <i class="icon2-arrow-right-small arrow"></i>
      </li>
    </ul>
    <div class="last">
      <span>提醒</span>
      <span class="message">开始前5分钟</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </div>
  </div>



</template>
<style scoped>
  @import "icomoon2.css";
  .mui-switch {
    width: 52px;
    height: 31px;
    position: absolute;
    top:0.2rem;
    right:0.3rem;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none; }
  .mui-switch:before {
    content: '';
    width: 29px;
    height: 29px;
    position: absolute;
    top: 0px;
    left: 0;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }
  .mui-switch:checked {
    border-color: #67B2FE;
    box-shadow: #67B2FE 0 0 0 16px inset;
    background-color: #67B2FE; }
  .mui-switch:checked:before {
    left: 21px; }
  .mui-switch.mui-switch-animbg {
    transition: background-color ease 0.4s; }
  .mui-switch.mui-switch-animbg:before {
    transition: left 0.3s; }
  .mui-switch.mui-switch-animbg:checked {
    box-shadow: #dfdfdf 0 0 0 0 inset;
    background-color: #67B2FE;
    transition: border-color 0.4s, background-color ease 0.4s; }
  .mui-switch.mui-switch-animbg:checked:before {
    transition: left 0.3s; }
  .mui-switch.mui-switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s; }
  .mui-switch.mui-switch-anim:before {
    transition: left 0.3s; }
  .mui-switch.mui-switch-anim:checked {
    box-shadow: #67B2FE 0 0 0 16px inset;
    background-color: #64bd63;
    transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
  .mui-switch.mui-switch-anim:checked:before {
    transition: left 0.3s; }
  .time{
    position: absolute;
    top:0;
    right: 0.88rem;
  }
  .message{
    position: absolute;
    top:0;
    right: 0.88rem;
  }
  ul,.last{
    background-color: white;
  }
  .whole{
    background-color: white;
    position: relative;
  }
  .arrow{
    position: absolute;
    right:0.11rem;
    top:0.31rem;
    font-size:22px;


  }
  .root{
    height: 100%;


  }
  .whole{
    height: 1.212rem; line-height: 1.212rem;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0;
    margin-top: 1.938rem;
    padding-left: 2.9%;
  }
  .last{
    padding-left: 3%;
    position: relative;
    margin-top: 0.44rem;
  }
  div{
    border-bottom: 0.5px solid #E3E3E3;
    border-top: 0.5px solid #E3E3E3;
  }
  .arrow
  {
    color: #E0E0E0;
  }

  ul{
    margin-top: 0.551rem;
    border-bottom: 0.5px solid #E3E3E3;
    border-top: 0.5px solid #E3E3E3;
    padding-left: 3%;
  }
  li{
    position:relative;
    height: 1.212rem;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #DDDDDD;
    line-height: 1.212rem;
    border-bottom: 0.5px solid #E3E3E3;

  }
  span{



  }
  .last{
    height: 1.212rem;

    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #DDDDDD;
    line-height: 1.212rem;
  }
  li:last-child{
    border-bottom: none;
  }
</style>
