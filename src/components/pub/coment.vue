<template>
  <div>
  <input type="text" placeholder="输入任何评论">
  <i class="icon2-new-folder file"></i>
    <i class="icon2-picture2 img"></i>
  <ul>
    <li>
      <img src="" alt="">
      <span class="word">产品介绍.ppt</span>
      <i class="icon2-error close"></i>
    </li>
    <li>
      <img src="" alt="">
       <span class="word">xxxx.jpg</span>
      <i class="icon2-error close"></i>
    </li>
  </ul>
  </div>
</template>
<style scoped>

@import "icomoon2.css";
li{
  position: relative;
  border-bottom: 0.5px solid #E3E3E3;

}
input{
  display: inline-block;
  padding-left:14px ;
  padding-top:21px ;
  padding-bottom: 150px;

}
ul{
  border-bottom: 0.5px solid #E3E3E3;
  border-top: 0.5px solid #E3E3E3;
  background-color: white;
}

.close{
  position: absolute;
  top:35%;
  right:5%;
  color: #DEDEDE;
  font-size: 17px;
}
  .file{
    position: absolute;
    top:24%;
    left:4%;
    color: #3D3D3D;
    font-size:20px;
  }
  .img{
    color: #3D3D3D;
    position: absolute;
    left:15%;
    top:24%;
    font-size:20px;
  }
  .word{
    font-family:AppleSystemUIFont;
    font-size: 13px;
    color: #3D3D3D;
    line-height: 1.173rem;
  }

</style>
