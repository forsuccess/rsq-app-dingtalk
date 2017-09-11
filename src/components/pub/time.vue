<template>
  <div class="root">
  <ul class="fir">
    <li>
      <span>全天</span>
      <input class="mui-switch" type="checkbox" checked>
    </li>
  </ul>
  <ul class="sec">
    <li><span>开始时间</span> <i class="icon2-arrow-right-small arrow"></i></li>

  <li><span>结束时间</span> <i class="icon2-arrow-right-small arrow"></i></li>
  </ul>
    <ul class="last">
   <li><span>提醒</span><i class="icon2-arrow-right-small arrow1"></i></li>
    </ul>

  </div>





</template>
<style>
  @import "icomoon2.css";
  .mui-switch {
    width: 52px;
    height: 31px;
    position: relative;
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
    position: absolute;
    top:0.15rem;
    right:0.55rem;
    border-color: #67B2FE;
    box-shadow: #67B2FE 0 0 0 16px inset;
    background-color: #67B2FE; }
  .mui-switch:checked:before {
    left: 21px; }


  .arrow{
    position: absolute;
    right:0.11rem;
    top:0.31rem;
    font-size:22px;
    color:#E0E0E0;
  }
  .arrow1{
    position: absolute;
    right:0.43rem;
    top:0.31rem;
    font-size:22px;
    color:#E0E0E0;
  }
  ul{
    background-color: white;
    border-bottom:0.5px solid #DADADA;
    border-top:0.5px solid #DADADA;
  }
  .fir{
    margin-top: 0.231rem;
    border-bottom:0.5px solid #DADADA;
    border-top:0.5px solid #DADADA;
  }
  .fir>li{
    padding-left: 3%;
  }
  .last>li{
    padding-left: 3%;
  }
  li{
    position: relative;
    line-height:1.2rem ;
    height: 1.2rem;
    border-bottom:0.5px solid #DADADA;
  }
  .sec{
    margin-top:0.231rem ;
    padding-left:3%;
  }
  .last{
    margin-top:0.391rem ;
  }
  .sec>li:last-child{
    border: none;
  }
  span{
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    letter-spacing: 0;
  }
  .sec span{

    color: #DDDDDD;

  }

  .last span{

    color: #DDDDDD;

  }



</style>
