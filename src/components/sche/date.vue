<template>

  <ul>
    <li class="fir">
      <span class="cancel">取消</span>
      <span class="frequent">重复频率</span>
      <span class="confirm">确定</span>
    </li>
    <li class="">
      <span class="repeat">每周重复</span>
      <span class="norepeat">每月重复</span>
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
      <span class="last">每周的周一，周二，周三重复</span></li>
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
  top:1.73rem;
  color: #55A8FD;
  font-weight: bold;
  font-size: 20px;
}
span{
  font-family: PingFangSC-Regular;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 1.173rem;
}
.cancel{
   position: absolute;
   left:3%;
   top:6%
}
.confirm{
  position: absolute;
  left:85%;

  top:6%
}
  .cancel,.confirm{
    color: #007AFF;
  }
  .frequent{
    color:  #3D3D3D;;
  }
  .repeat{
    margin-left: 2.84rem;

    font-size: 15px;
    color: #55A8FD;
  }
  .norepeat{
    margin-left: 0.84rem;
    font-size: 15px;
    color: #8C8C8C;
  }
  li{
    position: relative;
    padding-left: 3%;
    color: #333333;
    border-bottom: 0.5px solid #E3E3E3;

  }
  .last{
    font-size: 13px;
    color: #3D3D3D;
  }
  .fir{
    text-align: center;
  }


</style>
