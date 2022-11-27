(function (doc,win) {

  var fn = function () { 
    var deviceWidth =  doc.documentElement.clientWidth; // 获取的是物理像素，设备横向分辨率
    // 移动设备的横向逻辑像素超过640（这时候物理像素大于1280），可以去访问pc端了。
    if (deviceWidth > 1280) { // 保持font-size值不变。
      deviceWidth = 1280;
    }
    doc.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  }
  window.addEventListener('orientationchange'in win ? 'orientationchange' : 'resize', fn ,false);
  doc.addEventListener('DOMContentLoaded',fn,false);

})(document,window)
