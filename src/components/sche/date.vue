<template>

  <ul>
    <li class="fir">
      <span class="cancel">取消</span>
      <span class="frequent">重复频率</span>
      <span class="confirm">确定</span>
    </li>
    <li class="">

      <span class="dayrepeat">每周重复</span>
      <span class="monthrepeat">每月重复</span>

    </li>
    <li>
      <span>周一</span>
      <i class="icon2-selected finish"></i>
    <li>
      <span>周二</span>
    <i class="icon2-selected finish"></i>
    <li>
      <span>周三</span>
    </li>
    <li>
      <span>周四</span>
    </li>
    <li>
      <span>周五</span>
    </li>
    <li >
      <span class="repeat-last">每周的周一，周二，周三重复</span></li>
  </ul>



</template>
<style scoped>
@import "icomoon2.css";
ul{
  border-bottom: 0.5px solid #E3E3E3;
  border-top: 0.5px solid #E3E3E3;
  background-color: white;

}
.finish{
  position:absolute;
  right:0.63rem;
  top:0.28rem;
  color: #55A8FD;
  font-weight: bold;
  font-size: 20px;
}
span{
  font-family: PingFangSC-Regular;
  font-size: 17px;
  letter-spacing: 0;
  display: block;
}
.cancel{
   position: absolute;
   left:0.3rem;
   top:0.01rem;
}
.confirm{
  position: absolute;
  left:85%;

  top:0.01rem;
}
  .cancel,.confirm{
    color: #007AFF;
  }
  .frequent{
    color:  #3D3D3D;

  }
  .dayrepeat{
    margin-left: 2.84rem;

    font-size: 15px;
    color: #55A8FD;
  }
  .monthrepeat{
    position: absolute;
    right: 2.83rem;
    top:0;
    font-size: 15px;
    color: #8C8C8C;
  }
  li{
    position: relative;
    padding-left: 0.34rem;
    color: #333333;
    border-bottom: 0.5px solid #E3E3E3;
    height:1.173rem;
    line-height:1.173rem;
  }
  .repeat-last{
    font-size: 13px;
    color: #3D3D3D;
  }
  .fir{
    text-align: center;
  }


</style>
