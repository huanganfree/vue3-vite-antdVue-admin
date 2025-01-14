// pc端自适应

(function (doc,win) {

  seMetaTagScale(doc, win)

  var fn = function () { 
    var deviceWidth =  doc.documentElement.clientWidth; // 获取的是物理像素，设备横向分辨率
    // 移动设备的横向逻辑像素超过640（这时候物理像素大于1280），可以去访问pc端了。
    if (deviceWidth <=  1200) { // 保持font-size值不变。
      deviceWidth = 1200;
    }
    // if (deviceWidth >=  2420) { // 保持font-size值不变。
    //   deviceWidth = 2420;
    // }
    doc.documentElement.style.fontSize = deviceWidth / (1920 / 14) + 'px'; // 1920设计稿为参照
  }
  window.addEventListener('resize', fn , false);
  doc.addEventListener('DOMContentLoaded',fn,false);

})(document,window)


function seMetaTagScale(doc, win) {
  const dpr = win.devicePixelRatio;
  const scale = 1 / dpr;
  const contentStr = `width=device-width,initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale},user-scalable=no`;
  const metaDOM = doc.querySelector('meta[name="viewport"]');
  metaDOM?.setAttribute('content', contentStr)
}