<template>
  <div>
    <ul>
      <li>
        <span>不重复</span>
        <i class="icon2-selected finish"></i>
      </li>
      <li><span>每天重复</span></li>
      <li><span>每周重复（每周三）</span></li>
      <li><span>每月重复（每月19日）</span></li>
      <li><span>每年重复（每年7月19号）</span></li>
      <li><span>工作日重复（周一至周五）</span></li>
    </ul>
    <ul class="sec">
      <li>
        <span class="repeat">自定义重复</span>
        <span class="time">每周的周一，周二，周三...</span>
        <i class="icon2-arrow-right arrow"></i>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  .arrow{
    position: absolute;
    top:0.35rem;
    right:0.5rem;
    font-size: 17px;
    color: #999999;
  }
  .time{
    position: absolute;
    left:2.5rem;top:0.07rem;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;

  }
  .finish{
    position:absolute;
    right:0.63rem;
    top:0.3rem;
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

    display:block;
    margin-left: 0.45rem;
    color: #3D3D3D;
    font-family: PingFangSC-Regular;
    font-size: 17px;

  }
  .repeat{
    margin-left: 0.2rem;
  }
  li{
    padding:2px;
    height: 1.112rem;
    line-height:  1.112rem;;
    border-bottom: 0.5px solid #E3E3E3;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #3D3D3D;
  }
  li:last-child{
    border:none;
  }


</style>
