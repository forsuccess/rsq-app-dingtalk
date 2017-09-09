<template>
  <div class="root">
  <div class="whole">全天</div>
  <ul>
    <li class="start">
      <span>开始时间</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li class="end">
      <span>结束时间</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
  </ul>
  <div class="last">
    <span>提醒</span>
    <i class="icon2-arrow-right-small arrow"></i>
  </div>
  </div>



</template>
<style scoped>
  @import "icomoon2.css";
  ul,.last{
    background-color: white;
  }
  .whole{
    background-color: white;
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
    display: inline-block;
    line-height:1.212rem ;


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
