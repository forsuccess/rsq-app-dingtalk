<template>
  <div>
  <ul>
    <li>
      <span>任务开始时</span>
      <i class="icon2-selected finish"></i>
    </li>
    <li><span>提前5分钟</span></li>
    <li><span>提前15分钟</span></li>
    <li><span>提前30分钟</span></li>
    <li><span>提前1小时</span></li>
    <li><span>任务结束前1小时</span></li>
  </ul>
  <ul class="sec">
    <li>
      <span class="remind">自定义提醒时间</span>
      <span class="time">14:22</span>
    </li>
  </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  .remind{
    display: block;
    margin-left: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #55A8FD;
  }
  .time{
    position: absolute;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;
    letter-spacing: 0;
    right:0.63rem;
    top:0.23rem;
  }
  .finish{
    position:absolute;
    right:0.63rem;
    top:0.33rem;
    color: #55A8FD;
    font-weight: bold;
  }
  ul{
    position: relative;
    margin-top:1.938rem;
    border-bottom: 0.5px solid #E3E3E3;
    border-top: 0.5px solid #E3E3E3;
    background: #FFFFFF;
  }
  .sec{
    margin-top: 0.373rem;
  }

  span{
    /*line-height: 1.112rem;*/
     display:block;
    margin-left: 0.45rem;

  }
  li{
    padding:5px;
    line-height: 0.912rem;
    height: 0.912rem;
    border-bottom: 0.5px solid #E3E3E3;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #3D3D3D;
  }
  li:last-child{
    border:none;
  }


</style>
