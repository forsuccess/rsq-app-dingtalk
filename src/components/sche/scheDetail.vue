<template>
  <div>
  <ul>
    <li class="top">
      <i class="icon2-check-box check"></i>
      <span class="register">新用户注册</span>
    </li>
    <li>
    <input type="text" placeholder="添加任务描述">
    </li>
  </ul>
  <ul class="sec">
    <li>
      <i class="icon2-schedule schedule"></i>
      <div class="right">
      <span>日期</span>
      <span class="time">今天</span>
      <i class="icon2-arrow-right-small arrow"></i>
      </div>
    </li>
    <li>
      <i class="icon2-alarm alarm"></i>
      <div class="right">
      <span>日期</span>
      <span class="time">全天</span>
      <i class="icon2-arrow-right-small arrow"></i>
      </div>
    </li>
    <li>
      <i class="icon2-member member"></i>
      <div class="right">
      <span>日期</span>
      <span class="time">刘浩</span>
      <i class="icon2-arrow-right-small arrow"></i>
      </div>

    </li>
    <li>
      <i class="icon2-subplan-web sub"></i>
      <div class="right">
      <span>日期</span>
      <span class="time"></span>
      <i class="icon2-arrow-right-small arrow"></i>
      </div>
    </li>
  </ul>
  <ul class="third">
    <li class="">
      <span class="more">展开更多操作记录</span>
    </li>
    <li class="second">
      <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3d2175db3cd3d539d530078052ee8325/b7003af33a87e950c1e1a6491a385343fbf2b425.jpg" alt="">
      <div class="coment">
        <span class="name">曹德季</span>
        <p class="content">这个是文档</p>
      </div>
      <span class="third-time">7.23 16:21</span>
    </li>
    <li>
      <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3d2175db3cd3d539d530078052ee8325/b7003af33a87e950c1e1a6491a385343fbf2b425.jpg" alt="">
      <div class="coment">
        <span class="name">曹德季</span>
        <span class="third-time">7.23 16:21</span>
        <p class="content">这个是文档这个是文档这个是文档这个是文档这个是文档这个是文档这个是文档这个是文档这个是文档这个是文档</p>
      </div>
    </li>
  </ul>
    <ul class="bottom">
      <li>
        <input type="text" class="bot">
        <i class="icon2-add-circle add" ></i>
        <button class="send">发送</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  .send{
    background: #FFFFFF;
    border: 1px solid #55A8FD;
    border-radius: 3px;
    color:#55A8FD;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #55A8FD;
    letter-spacing: 0;
    width: 1.433rem;
    height: 1.005rem;
    position: absolute;
    right: 0.64rem;
    top: 0.15rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;

    width:100%;
  }
  .bot{
    display: inline-block;
    width:6.8rem;
    height:0.933rem ;
  }
  .add{
    font-size: 22px;
    color: #A3A3A3;
  }
  .coment{
    display: inline-block;
    margin-left: 1.013rem;
    position: relative;
  }
  .second{
    border-bottom: none;
  }
  img{
    position: absolute;
    width:0.746rem ;
    height:0.746rem;
    border-radius: 50%;
    top:0.421rem;
  }
  .third-time{
    font-family: STHeitiSC-Light;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    position: absolute;
    top:2%;
    right:10%;
  }
  .name{
    font-family: STHeitiSC-Light;
    font-size: 13px;
    color: #999999;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top:0.388rem;
  }
  .content{
    font-family: STHeitiSC-Light;
    font-size: 16px;
    color: #111111;
    letter-spacing: 0;
    line-height: 21px;
    margin-top: 0.933rem;

  }
  .schedule,.alarm,.member,.sub{
    font-size: 18px;
    color:#55A8FD;
  }
  .check{
    background: #FFFFFF;

    border-radius: 1px;
    font-size: 18px;
  }
  .register{
    font-family: PingFangSC-Medium;
    font-size: 19px;
    color: #333333;
    letter-spacing: 0;
    font-weight:bold;
  }
  .more{
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #55A8FD;
  }
  .arrow{
    position: absolute;
    right:3.2%;
    top:31.5%;
   color: #D6D6D6;
    font-size: 18px;

  }
  .right{
    border-bottom:0.5px solid #DADADA ;
    display: inline-block;
    width:90%;
  }
  .top{
    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;
  }
  ul{
    margin-top:2%;
    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;
    background-color: white;
  }
  .top li input {
    height: 1.226rem;
    border-bottom: 0.5px solid #DADADA;
  }
  span{
  line-height: 1.226rem;
  }

  li{
    position:relative;
    padding-left: 3%;

  }
  .third>li{
    border-bottom: 0.5px solid #DADADA;
  }

  span{
    line-height:1.226rem ;
    font-family: PingFangSC-Medium;
    font-size: 19px;
    color: #333333;
    letter-spacing: 0;
  }
  input{

    display: inline-block;
    font-family: STHeitiSC-Light;
    font-size: 15px;
    color: #A5A5A5;
  }
  .time{
    color: #999999;
  }
</style>
