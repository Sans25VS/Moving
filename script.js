
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./character/male0001.png
       ./character/male0002.png
       ./character/male0003.png
       ./character/male0004.png
       ./character/male0005.png
       ./character/male0006.png
       ./character/male0007.png
       ./character/male0008.png
       ./character/male0009.png
       ./character/male0010.png
       ./character/male0011.png
       ./character/male0012.png
       ./character/male0013.png
       ./character/male0014.png
       ./character/male0015.png
       ./character/male0016.png
       ./character/male0017.png
       ./character/male0018.png
       ./character/male0019.png
       ./character/male0020.png
       ./character/male0021.png
       ./character/male0022.png
       ./character/male0023.png
       ./character/male0024.png
       ./character/male0025.png
       ./character/male0026.png
       ./character/male0027.png
       ./character/male0028.png
       ./character/male0029.png
       ./character/male0030.png
       ./character/male0031.png
       ./character/male0032.png
       ./character/male0033.png
       ./character/male0034.png
       ./character/male0035.png
       ./character/male0036.png
       ./character/male0037.png
       ./character/male0038.png
       ./character/male0039.png
       ./character/male0040.png
       ./character/male0041.png
       ./character/male0042.png
       ./character/male0043.png
       ./character/male0044.png
       ./character/male0045.png
       ./character/male0046.png
       ./character/male0047.png
       ./character/male0048.png
       ./character/male0049.png
       ./character/male0050.png
       ./character/male0051.png
       ./character/male0052.png
       ./character/male0053.png
       ./character/male0054.png
       ./character/male0055.png
       ./character/male0056.png
       ./character/male0057.png
       ./character/male0058.png
       ./character/male0059.png
       ./character/male0060.png
       ./character/male0061.png
       ./character/male0062.png
       ./character/male0063.png
       ./character/male0064.png
       ./character/male0065.png
       ./character/male0066.png
       ./character/male0067.png
       ./character/male0068.png
       ./character/male0069.png
       ./character/male0070.png
       ./character/male0071.png
       ./character/male0072.png
       ./character/male0073.png
       ./character/male0074.png
       ./character/male0075.png
       ./character/male0076.png
       ./character/male0077.png
       ./character/male0078.png
       ./character/male0079.png
       ./character/male0080.png
       ./character/male0081.png
       ./character/male0082.png
       ./character/male0083.png
       ./character/male0084.png
       ./character/male0085.png
       ./character/male0086.png
       ./character/male0087.png
       ./character/male0088.png
       ./character/male0089.png
       ./character/male0090.png
       ./character/male0091.png
       ./character/male0092.png
       ./character/male0093.png
       ./character/male0094.png
       ./character/male0095.png
       ./character/male0096.png
       ./character/male0097.png
       ./character/male0098.png
       ./character/male0099.png
       ./character/male0100.png
       ./character/male0101.png
       ./character/male0102.png
       ./character/male0103.png
       ./character/male0104.png
       ./character/male0105.png
       ./character/male0106.png
       ./character/male0107.png
       ./character/male0108.png
       ./character/male0109.png
       ./character/male0110.png
       ./character/male0111.png
       ./character/male0112.png
       ./character/male0113.png
       ./character/male0114.png
       ./character/male0115.png
       ./character/male0116.png
       ./character/male0117.png
       ./character/male0118.png
       ./character/male0119.png
       ./character/male0120.png
       ./character/male0121.png
       ./character/male0122.png
       ./character/male0123.png
       ./character/male0124.png
       ./character/male0125.png
       ./character/male0126.png
       ./character/male0127.png
       ./character/male0128.png
       ./character/male0129.png
       ./character/male0130.png
       ./character/male0131.png
       ./character/male0132.png
       ./character/male0133.png
       ./character/male0134.png
       ./character/male0135.png
       ./character/male0136.png
       ./character/male0137.png
       ./character/male0138.png
       ./character/male0139.png
       ./character/male0140.png
       ./character/male0141.png
       ./character/male0142.png
       ./character/male0143.png
       ./character/male0144.png
       ./character/male0145.png
       ./character/male0146.png
       ./character/male0147.png
       ./character/male0148.png
       ./character/male0149.png
       ./character/male0150.png
       ./character/male0151.png
       ./character/male0152.png
       ./character/male0153.png
       ./character/male0154.png
       ./character/male0155.png
       ./character/male0156.png
       ./character/male0157.png
       ./character/male0158.png
       ./character/male0159.png
       ./character/male0160.png
       ./character/male0161.png
       ./character/male0162.png
       ./character/male0163.png
       ./character/male0164.png
       ./character/male0165.png
       ./character/male0166.png
       ./character/male0167.png
       ./character/male0168.png
       ./character/male0169.png
       ./character/male0170.png
       ./character/male0171.png
       ./character/male0172.png
       ./character/male0173.png
       ./character/male0174.png
       ./character/male0175.png
       ./character/male0176.png
       ./character/male0177.png
       ./character/male0178.png
       ./character/male0179.png
       ./character/male0180.png
       ./character/male0181.png
       ./character/male0182.png
       ./character/male0183.png
       ./character/male0184.png
       ./character/male0185.png
       ./character/male0186.png
       ./character/male0187.png
       ./character/male0188.png
       ./character/male0189.png
       ./character/male0190.png
       ./character/male0191.png
       ./character/male0192.png
       ./character/male0193.png
       ./character/male0194.png
       ./character/male0195.png
       ./character/male0196.png
       ./character/male0197.png
       ./character/male0198.png
       ./character/male0199.png
       ./character/male0200.png
       ./character/male0201.png
       ./character/male0202.png
       ./character/male0203.png
       ./character/male0204.png
       ./character/male0205.png
       ./character/male0206.png
       ./character/male0207.png
       ./character/male0208.png
       ./character/male0209.png
       ./character/male0210.png
       ./character/male0211.png
       ./character/male0212.png
       ./character/male0213.png
       ./character/male0214.png
       ./character/male0215.png
       ./character/male0216.png
       ./character/male0217.png
       ./character/male0218.png
       ./character/male0219.png
       ./character/male0220.png
       ./character/male0221.png
       ./character/male0222.png
       ./character/male0223.png
       ./character/male0224.png
       ./character/male0225.png
       ./character/male0226.png
       ./character/male0227.png
       ./character/male0228.png
       ./character/male0229.png
       ./character/male0230.png
       ./character/male0231.png
       ./character/male0232.png
       ./character/male0233.png
       ./character/male0234.png
       ./character/male0235.png
       ./character/male0236.png
       ./character/male0237.png
       ./character/male0238.png
       ./character/male0239.png
       ./character/male0240.png
       ./character/male0241.png
       ./character/male0242.png
       ./character/male0243.png
       ./character/male0244.png
       ./character/male0245.png
       ./character/male0246.png
       ./character/male0247.png
       ./character/male0248.png
       ./character/male0249.png
       ./character/male0250.png
       ./character/male0251.png
       ./character/male0252.png
       ./character/male0253.png
       ./character/male0254.png
       ./character/male0255.png
       ./character/male0256.png
       ./character/male0257.png
       ./character/male0258.png
       ./character/male0259.png
       ./character/male0260.png
       ./character/male0261.png
       ./character/male0262.png
       ./character/male0263.png
       ./character/male0264.png
       ./character/male0265.png
       ./character/male0266.png
       ./character/male0267.png
       ./character/male0268.png
       ./character/male0269.png
       ./character/male0270.png
       ./character/male0271.png
       ./character/male0272.png
       ./character/male0273.png
       ./character/male0274.png
       ./character/male0275.png
       ./character/male0276.png
       ./character/male0277.png
       ./character/male0278.png
       ./character/male0279.png
       ./character/male0280.png
       ./character/male0281.png
       ./character/male0282.png
       ./character/male0283.png
       ./character/male0284.png
       ./character/male0285.png
       ./character/male0286.png
       ./character/male0287.png
       ./character/male0288.png
       ./character/male0289.png
       ./character/male0290.png
       ./character/male0291.png
       ./character/male0292.png
       ./character/male0293.png
       ./character/male0294.png
       ./character/male0295.png
       ./character/male0296.png
       ./character/male0297.png
       ./character/male0298.png
       ./character/male0299.png
       ./character/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })