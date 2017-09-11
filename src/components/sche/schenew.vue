<template>
  <div class="root-sche">
  <input type="text" PLACEHOLDER="输入任务标题"  >
  <ul class="one">
    <li class="">
      <span class="date">日期</span>
      <span class="now">今天</span>
      <i class="icon2-arrow-right-small arrow"></i>
    </li>
    <li class="">
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
        <p class="">DING</p>
        <p class="message">通过顶顶消息通知他人</p>
      </div>
     <input class="mui-switch" type="checkbox" checked>
    </li>
  </ul>
  </div>
</template>
<style scoped>
  @import "icomoon2.css";
  input::-webkit-input-placeholder { /* WebKit browsers */
    font-family: PingFangSC-Regular;
    font-size: 19px;
    color: #8C8C8C;
    letter-spacing: 0;
    padding-left: 0.3rem;
  }
  .mui-switch {
    width: 52px;
    height: 31px;
    position: absolute;
    top:0.55rem;
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
    background-color: #67B2FE;
    transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
  .mui-switch.mui-switch-anim:checked:before {
    transition: left 0.3s; }
  ul{
    background-color: white;
  }
 .execute{


 }
  .bottom{
    height: 2rem;
    display: inline-block;
    padding-left:2px;
    line-height: 0.1rem;
  }
  .photo{
    position: absolute;
    right:2.26rem;
    bottom:0.1rem;

  }

  input[type='text']{
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
    top:0.3rem;
    right: 0.1rem;

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
    position:absolute;
    top:0;
    color: #999999;

    right:0.85rem;

  }
  .now
  {
    position: absolute;
    top:0.04rem;
    right: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;
    letter-spacing: 0;

  }
  ul{
    padding-left: 3%;
  }
  .one>li:first-child{
    border-bottom: 0.5px solid #E3E3E3;
  }
  .one>li:last-child{
    border-bottom: none;
  }
  .two>li:last-child{
    border-bottom: none;
  }
  span{
    display: block;
    /*margin-bottom: 5px;*/
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;
    /*line-height: 1.458rem;*/

  }

  img{
    border-radius: 50%;
    width:0.575rem;
    height:0.575rem;




  }
  img:first-child{
    /*display: inline-block;*/
    /*margin-left: 3.8rem;*/
  }
  li{
    position: relative;
    height:1.3rem;
    line-height: 1.3rem;

  }
  .ding{
    height:2rem;
    line-height: 1rem;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #333333;

  }
  .bottom{
    margin-top: 0.7rem;
  }
  p{

  }
  .message{
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #999999;

  }

</style>
