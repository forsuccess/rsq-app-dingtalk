<template>
  <div>
    <div class="top">
      <i class="icon2-add-circle add"></i>
      <span>新建子任务</span>
    </div>
    <ul>
      <li>
          <i class="icon2-check-box select unfinish"></i>
          <span class="content">计划任务框设计</span>
      </li>
      <li>
          <i class="icon2-check-box select unfinish" ></i>
          <span class="content">计划任务框设计</span>
      </li>
      <li>
          <i class="icon2-seleced-mult select finish" ></i>
          <span class="content">多级子任务框设计</span>
      </li>
      <li>
          <i class="icon2-seleced-mult select finish" ></i>
          <span class="content">移动端架构设计</span>
      </li>

    </ul>
  </div>



</template>
<style scoped>
  @import "icomoon2.css";
  .select{
    font-size: 17px;
    position: absolute;
    top:0.38rem;
  }
  .top{
    background-color: white;
    position: relative;
    line-height: 1.226rem;;
    margin-top:1.956rem;
    padding-left:5%
  }
  .add{
    position: absolute;
    top:0.4rem;
    font-size: 15px;
    background-color: #55A8FD;
    color:white;
    border: 1px solid #55A8FD;
    border-radius: 50%;
  }
  .top{

    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;

  }
  .top>span{
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #55A8FD;

  }



  .finish{
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #999999;
    line-height: 22px;

  }
  .top ul{
    background-color: white;
  }
  span{
    display: block;
    margin-left: 0.8rem;
    font-family:PingFangSC-Regular;
    font-size: 17px;
    color: #333333;

  }
  .date{
    position:absolute ;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #FF7A7A;
    letter-spacing: 0;
    right:2.7%;
    top:0.351rem;
  }
  ul{
    position: relative;
    margin-top:0.266rem;
    border-bottom:0.5px solid #DADADA ;
    border-top:0.5px solid #DADADA ;
    padding-left: 5%;
  }
  li{
    height: 1.226rem;
    line-height: 1.226rem;
    padding:0;
    position: relative;
    border-bottom:0.5px solid #DADADA ;
  }
  li:last-child{
    border: none;
  }

</style>
