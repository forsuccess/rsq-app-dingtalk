<template>
  <div class="root-sche">
  <input type="text" PLACEHOLDER="输入任务标题"  >
  <ul class="one">
    <li class="">
      <span class="date">日期</span>
      <span class="now">今天</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li class="date">
      <span class="date">时间</span>
      <span class="now">全天</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
  </ul>
  <ul class="two">
    <li class="">

      <span class="execute">执行人</span>
      <div class="photo">
      <img src="http://pic.ibaotu.com/00/18/25/77V888piCGuH.jpg-0.jpg!/fw/700/watermark/url/L3RvL2xvZ29fdG8ucG5n/align/center" alt="">
      <img src="http://pic.ibaotu.com/00/18/25/77V888piCGuH.jpg-0.jpg!/fw/700/watermark/url/L3RvL2xvZ29fdG8ucG5n/align/center" alt="">
      <img src="http://pic.ibaotu.com/00/18/25/77V888piCGuH.jpg-0.jpg!/fw/700/watermark/url/L3RvL2xvZ29fdG8ucG5n/align/center" alt="">
      </div>
        <span class="people">15人</span>
      <i class="icon2-arrow-right-small arrow"></i>

    </li>
    <li class="ding">
      <div class="bottom">
        <p class="ding">DING</p>
        <p class="message">通过顶顶消息通知他人</p>
      </div>
      <i>icon</i>
    </li>
  </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  ul{
    background-color: white;
  }
 .execute{


 }
  .bottom{
    display: inline-block;
    padding-left:2px;
    line-height: 0.4rem;
  }
  .photo{

    display: inline-block;
  }

  input{
    height:1.458rem;
    background: #FFFFFF;
    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;
    margin-top: 1.938rem;
    background: #FFFFFF;
  }
  .arrow{
    color: #999999;
    font-size: 21px;
   position: absolute;
    top:0.485rem;
    right: 0.19rem;

  }
  .one{
    margin-top: 0.231rem;
    border-bottom: 0.5px solid #E3E3E3;
    border-top: 0.5px solid #E3E3E3;
    vertical-align: middle;

  }
  .two{
    margin-top: 0.231rem;
    border-bottom: 0.5px solid #E3E3E3;
    border-top: 0.5px solid #E3E3E3;
  }
  .people{
    color: #999999;
    margin-left: 6.36rem;

  }
  .now
  {


    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;
    letter-spacing: 0;
    margin-left: 6.80rem;
  }
  ul{
    padding-left: 3%;
  }
  li:first-child{
    border-bottom: 0.5px solid #E3E3E3;
  }
  span{
    margin-bottom: 5px;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    line-height: 1.458rem;

  }
  .photo{
  position: absolute;
    line-height: 1.458rem;
  }
  img{
    border-radius: 50%;
    width:0.575rem;
    height:0.575rem;




  }
  img:first-child{
    display: inline-block;
    margin-left: 3.8rem;
  }
  li{
    position: relative;

  }
  .ding{
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;

  }
  .bottom{
    margin-top: 1.5%;
  }
  p{
    line-height:  0.1rem;
  }
  .message{
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #999999;
    line-height: 21px;
  }

</style>
