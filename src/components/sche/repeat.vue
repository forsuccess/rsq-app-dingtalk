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
        <span >自定义重复</span>
        <span class="time">每周的周一，周二，周三...</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";

  .time{

    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;

  }
  .finish{
    position:absolute;
    right:0.63rem;
    top:0.43rem;
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
    line-height: 1.112rem;
    display:inline-block;
    margin-left: 0.45rem;
    color: #3D3D3D;
    font-family: PingFangSC-Regular;
    font-size: 17px;

  }
  li{
    padding:5px;
    height: 1.112rem;
    border-bottom: 0.5px solid #E3E3E3;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #3D3D3D;
  }
  li:last-child{
    border:none;
  }


</style>
