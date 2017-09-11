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
  <ul class="sec-">
    <li>
      <i class="icon2-schedule schedule"></i>
      <span>日期</span>
      <span class="date">今天</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li>
      <i class="icon2-alarm alarm"></i>
      <span>时间</span>
      <span class="time">全天</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li>
      <i class="icon2-member member"></i>
      <span>执行人</span>
      <span class="person">刘浩</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li>
      <i class="icon2-subplan-web sub"></i>
      <span>子任务</span>
      <span class="time"></span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
  </ul>
  <div class="third">
    <div class="more-operation">
      <p class="more">展开更多操作记录</p>
    </div>
    <div class="second-content">
      <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3d2175db3cd3d539d530078052ee8325/b7003af33a87e950c1e1a6491a385343fbf2b425.jpg" alt="">
      <div class="right-content">
        <div class="top-content">
          <span class="name-content">曹得济</span>
          <span class="time-last">7.23 19:41</span>
        </div>
        <p class="content-core">h哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或</p>
      </div>
    </div>
    <div class="second-content">
      <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3d2175db3cd3d539d530078052ee8325/b7003af33a87e950c1e1a6491a385343fbf2b425.jpg" alt="">
      <div class="right-content">
        <div class="top-content">
          <span class="name-content">曹得济</span>
          <span class="time-last">7.23</span>
        </div>
        <p class="content-core">h哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或哈哈哈哈哈哈哈</p>
      </div>
    </div>
  </div>
    <div class="bottom">
      <input type="text" class="bot" placeholder="输入你要回复的内容或上传文件">
      <i class="icon2-add-circle add" ></i>
      <button class="send">发送</button>
    </div>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  input::-webkit-input-placeholder { /* WebKit browsers */
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;

  }
  input{
    height: 0.933rem;
    line-height: 0.933rem;
  }
  .more-operation{
    height:  1.226rem;
    line-height: 1.226rem;
    border-bottom:0.5px solid #DADADA ;
    background-color: white;
    padding-left: 0.28rem;
  }
  .right-content{
    position: relative;
    margin-left:0.3rem;
    top:0.3rem
  }
  .top-content{
    position: relative;
  }
  .name-content{
    font-family: STHeitiSC-Light;
    font-size: 13px;
    color: #999999;
    letter-spacing: 0;
  }
  .time{
    font-family: STHeitiSC-Light;
    font-size: 10px;
    color: #999999;
    letter-spacing: 0;
  }
  .time,.date{
    position: absolute;
    top:0;
    left:1.7rem;
    font-size: 17px;
    color: #999999;
  }
  .person{
    position: absolute;
    top:0;
    left:2rem;
    font-size: 17px;
    color: #999999;
  }
  .send{
    background: #FFFFFF;
    border: 1px solid #55A8FD;
    border-radius: 3px;
    color:#55A8FD;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #55A8FD;
    letter-spacing: 0;
    width: 1.386rem;
    height: 0.933rem;
    position: absolute;
    right: 0.64rem;
    top: 0.15rem;
    line-height: 0.933rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    padding-bottom:10px ;
    width:100%;
    border-top:0.5px solid #DADADA ;
  }
  .bot{
    display: inline-block;
    width:6.8rem;
    height:0.933rem ;
    border:0.5px solid #DADADA ;
    margin-left: 10px;
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
  .second-content{
    border-bottom: none;
  }
  img{
    position: absolute;
    width:0.746rem ;
    height:0.746rem;
    border-radius: 50%;
    top:1.61rem;
    left:0.3rem;
  }
  .time-last{
    font-family: STHeitiSC-Light;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    position: absolute;
    top:2%;
    right:0.5rem;
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
  .content-core{
    font-family: STHeitiSC-Light;
    font-size: 16px;
    color: #111111;
    letter-spacing: 0;
    line-height: 21px;
    margin-left: 1rem;
    margin-top:0.1rem;
  }
  .schedule,.alarm,.member,.sub{
    position: absolute;
    font-size: 18px;
    color:#55A8FD;
    top:0.35rem;
  }
  .schedule{

  }
  .check{
    background: #FFFFFF;
    position: absolute;
    top:0.35rem;
    border-radius: 1px;
    font-size: 18px;
  }
  .register{
    font-family: PingFangSC-Medium;
    font-size: 19px;
    color: #333333;
    letter-spacing: 0;
    font-weight:bold;
    margin-left: 0.87rem;
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


  li{
    position:relative;
    padding-left: 3%;
    line-height:1.226rem
  }
  .third{
    border-bottom: 0.5px solid #DADADA;
    background-color: white;
  }

  span{
    /*line-height:1.226rem ;*/
    font-family: PingFangSC-Medium;
    font-size: 19px;
    color: #333333;
    letter-spacing: 0;
    margin-left: 1rem;
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
  .third{
    position: relative;
  }
</style>
