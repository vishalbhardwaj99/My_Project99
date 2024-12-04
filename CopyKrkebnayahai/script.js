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
       img/CYBERFICTION-IMAGES/male0001.png
       img/CYBERFICTION-IMAGES/male0002.png
       img/CYBERFICTION-IMAGES/male0003.png
       img/CYBERFICTION-IMAGES/male0004.png
       img/CYBERFICTION-IMAGES/male0005.png
       img/CYBERFICTION-IMAGES/male0006.png
       img/CYBERFICTION-IMAGES/male0007.png
       img/CYBERFICTION-IMAGES/male0008.png
       img/CYBERFICTION-IMAGES/male0009.png
       img/CYBERFICTION-IMAGES/male0010.png
       img/CYBERFICTION-IMAGES/male0012.png
       img/CYBERFICTION-IMAGES/male0013.png
       img/CYBERFICTION-IMAGES/male0011.png
       img/CYBERFICTION-IMAGES/male0014.png
       img/CYBERFICTION-IMAGES/male0015.png
       img/CYBERFICTION-IMAGES/male0016.png
       img/CYBERFICTION-IMAGES/male0017.png
       img/CYBERFICTION-IMAGES/male0018.png
       img/CYBERFICTION-IMAGES/male0019.png
       img/CYBERFICTION-IMAGES/male0020.png
       img/CYBERFICTION-IMAGES/male0021.png
       img/CYBERFICTION-IMAGES/male0022.png
       img/CYBERFICTION-IMAGES/male0023.png
       img/CYBERFICTION-IMAGES/male0024.png
       img/CYBERFICTION-IMAGES/male0025.png
       img/CYBERFICTION-IMAGES/male0026.png
       img/CYBERFICTION-IMAGES/male0027.png
       img/CYBERFICTION-IMAGES/male0028.png
       img/CYBERFICTION-IMAGES/male0029.png
       img/CYBERFICTION-IMAGES/male0030.png
       img/CYBERFICTION-IMAGES/male0031.png
       img/CYBERFICTION-IMAGES/male0032.png
       img/CYBERFICTION-IMAGES/male0033.png
       img/CYBERFICTION-IMAGES/male0034.png
       img/CYBERFICTION-IMAGES/male0035.png
       img/CYBERFICTION-IMAGES/male0036.png
       img/CYBERFICTION-IMAGES/male0037.png
       img/CYBERFICTION-IMAGES/male0038.png
       img/CYBERFICTION-IMAGES/male0039.png
       img/CYBERFICTION-IMAGES/male0040.png
       img/CYBERFICTION-IMAGES/male0041.png
       img/CYBERFICTION-IMAGES/male0042.png
       img/CYBERFICTION-IMAGES/male0043.png
       img/CYBERFICTION-IMAGES/male0044.png
       img/CYBERFICTION-IMAGES/male0045.png
       img/CYBERFICTION-IMAGES/male0046.png
       img/CYBERFICTION-IMAGES/male0047.png
       img/CYBERFICTION-IMAGES/male0048.png
       img/CYBERFICTION-IMAGES/male0049.png
       img/CYBERFICTION-IMAGES/male0050.png
       img/CYBERFICTION-IMAGES/male0051.png
       img/CYBERFICTION-IMAGES/male0052.png
       img/CYBERFICTION-IMAGES/male0053.png
       img/CYBERFICTION-IMAGES/male0054.png
       img/CYBERFICTION-IMAGES/male0055.png
       img/CYBERFICTION-IMAGES/male0056.png
       img/CYBERFICTION-IMAGES/male0057.png
       img/CYBERFICTION-IMAGES/male0058.png
       img/CYBERFICTION-IMAGES/male0059.png
       img/CYBERFICTION-IMAGES/male0060.png
       img/CYBERFICTION-IMAGES/male0061.png
       img/CYBERFICTION-IMAGES/male0062.png
       img/CYBERFICTION-IMAGES/male0063.png
       img/CYBERFICTION-IMAGES/male0064.png
       img/CYBERFICTION-IMAGES/male0065.png
       img/CYBERFICTION-IMAGES/male0066.png
       img/CYBERFICTION-IMAGES/male0067.png
       img/CYBERFICTION-IMAGES/male0068.png
       img/CYBERFICTION-IMAGES/male0069.png
       img/CYBERFICTION-IMAGES/male0070.png
       img/CYBERFICTION-IMAGES/male0071.png
       img/CYBERFICTION-IMAGES/male0072.png
       img/CYBERFICTION-IMAGES/male0073.png
       img/CYBERFICTION-IMAGES/male0074.png
       img/CYBERFICTION-IMAGES/male0075.png
       img/CYBERFICTION-IMAGES/male0076.png
       img/CYBERFICTION-IMAGES/male0077.png
       img/CYBERFICTION-IMAGES/male0078.png
       img/CYBERFICTION-IMAGES/male0079.png
       img/CYBERFICTION-IMAGES/male0080.png
       img/CYBERFICTION-IMAGES/male0081.png
       img/CYBERFICTION-IMAGES/male0082.png
       img/CYBERFICTION-IMAGES/male0083.png
       img/CYBERFICTION-IMAGES/male0084.png
       img/CYBERFICTION-IMAGES/male0085.png
       img/CYBERFICTION-IMAGES/male0086.png
       img/CYBERFICTION-IMAGES/male0087.png
       img/CYBERFICTION-IMAGES/male0088.png
       img/CYBERFICTION-IMAGES/male0089.png
       img/CYBERFICTION-IMAGES/male0090.png
       img/CYBERFICTION-IMAGES/male0091.png
       img/CYBERFICTION-IMAGES/male0092.png
       img/CYBERFICTION-IMAGES/male0093.png
       img/CYBERFICTION-IMAGES/male0094.png
       img/CYBERFICTION-IMAGES/male0095.png
       img/CYBERFICTION-IMAGES/male0096.png
       img/CYBERFICTION-IMAGES/male0097.png
       img/CYBERFICTION-IMAGES/male0098.png
       img/CYBERFICTION-IMAGES/male0099.png
       img/CYBERFICTION-IMAGES/male0100.png
       img/CYBERFICTION-IMAGES/male0101.png
       img/CYBERFICTION-IMAGES/male0102.png
       img/CYBERFICTION-IMAGES/male0103.png
       img/CYBERFICTION-IMAGES/male0104.png
       img/CYBERFICTION-IMAGES/male0105.png
       img/CYBERFICTION-IMAGES/male0106.png
       img/CYBERFICTION-IMAGES/male0107.png
       img/CYBERFICTION-IMAGES/male0108.png
       img/CYBERFICTION-IMAGES/male0109.png
       img/CYBERFICTION-IMAGES/male0125.png
       img/CYBERFICTION-IMAGES/male0126.png
       img/CYBERFICTION-IMAGES/male0127.png
       img/CYBERFICTION-IMAGES/male0128.png
       img/CYBERFICTION-IMAGES/male0129.png
       img/CYBERFICTION-IMAGES/male0130.png
       img/CYBERFICTION-IMAGES/male0131.png
       img/CYBERFICTION-IMAGES/male0132.png
       img/CYBERFICTION-IMAGES/male0133.png
       img/CYBERFICTION-IMAGES/male0134.png
       img/CYBERFICTION-IMAGES/male0135.png
       img/CYBERFICTION-IMAGES/male0136.png
       img/CYBERFICTION-IMAGES/male0137.png
       img/CYBERFICTION-IMAGES/male0138.png
       img/CYBERFICTION-IMAGES/male0139.png
       img/CYBERFICTION-IMAGES/male0140.png
       img/CYBERFICTION-IMAGES/male0141.png
       img/CYBERFICTION-IMAGES/male0142.png
       img/CYBERFICTION-IMAGES/male0143.png
       img/CYBERFICTION-IMAGES/male0144.png
       img/CYBERFICTION-IMAGES/male0145.png
       img/CYBERFICTION-IMAGES/male0146.png
       img/CYBERFICTION-IMAGES/male0147.png
       img/CYBERFICTION-IMAGES/male0148.png
       img/CYBERFICTION-IMAGES/male0149.png
       img/CYBERFICTION-IMAGES/male0150.png
       img/CYBERFICTION-IMAGES/male0151.png
       img/CYBERFICTION-IMAGES/male0152.png
       img/CYBERFICTION-IMAGES/male0153.png
       img/CYBERFICTION-IMAGES/male0154.png
       img/CYBERFICTION-IMAGES/male0155.png
       img/CYBERFICTION-IMAGES/male0156.png
       img/CYBERFICTION-IMAGES/male0157.png
       img/CYBERFICTION-IMAGES/male0158.png
       img/CYBERFICTION-IMAGES/male0159.png
       img/CYBERFICTION-IMAGES/male0160.png
       img/CYBERFICTION-IMAGES/male0161.png
       img/CYBERFICTION-IMAGES/male0162.png
       img/CYBERFICTION-IMAGES/male0163.png
       img/CYBERFICTION-IMAGES/male0164.png
       img/CYBERFICTION-IMAGES/male0165.png
       img/CYBERFICTION-IMAGES/male0166.png
       img/CYBERFICTION-IMAGES/male0167.png
       img/CYBERFICTION-IMAGES/male0168.png
       img/CYBERFICTION-IMAGES/male0169.png
       img/CYBERFICTION-IMAGES/male0170.png
       img/CYBERFICTION-IMAGES/male0171.png
       img/CYBERFICTION-IMAGES/male0172.png
       img/CYBERFICTION-IMAGES/male0173.png
       img/CYBERFICTION-IMAGES/male0174.png
       img/CYBERFICTION-IMAGES/male0175.png
       img/CYBERFICTION-IMAGES/male0176.png
       img/CYBERFICTION-IMAGES/male0177.png
       img/CYBERFICTION-IMAGES/male0178.png
       img/CYBERFICTION-IMAGES/male0179.png
       img/CYBERFICTION-IMAGES/male0180.png
       img/CYBERFICTION-IMAGES/male0181.png
       img/CYBERFICTION-IMAGES/male0182.png
       img/CYBERFICTION-IMAGES/male0183.png
       img/CYBERFICTION-IMAGES/male0184.png
       img/CYBERFICTION-IMAGES/male0185.png
       img/CYBERFICTION-IMAGES/male0186.png
       img/CYBERFICTION-IMAGES/male0187.png
       img/CYBERFICTION-IMAGES/male0188.png
       img/CYBERFICTION-IMAGES/male0189.png
       img/CYBERFICTION-IMAGES/male0190.png
       img/CYBERFICTION-IMAGES/male0191.png
       img/CYBERFICTION-IMAGES/male0192.png
       img/CYBERFICTION-IMAGES/male0193.png
       img/CYBERFICTION-IMAGES/male0194.png
       img/CYBERFICTION-IMAGES/male0195.png
       img/CYBERFICTION-IMAGES/male0196.png
       img/CYBERFICTION-IMAGES/male0197.png
       img/CYBERFICTION-IMAGES/male0198.png
       img/CYBERFICTION-IMAGES/male0199.png
       img/CYBERFICTION-IMAGES/male0200.png
       img/CYBERFICTION-IMAGES/male0201.png
       img/CYBERFICTION-IMAGES/male0202.png
       img/CYBERFICTION-IMAGES/male0203.png
       img/CYBERFICTION-IMAGES/male0204.png
       img/CYBERFICTION-IMAGES/male0205.png
       img/CYBERFICTION-IMAGES/male0206.png
       img/CYBERFICTION-IMAGES/male0207.png
       img/CYBERFICTION-IMAGES/male0208.png
       img/CYBERFICTION-IMAGES/male0209.png
       img/CYBERFICTION-IMAGES/male0210.png
       img/CYBERFICTION-IMAGES/male0211.png
       img/CYBERFICTION-IMAGES/male0212.png
       img/CYBERFICTION-IMAGES/male0213.png
       img/CYBERFICTION-IMAGES/male0214.png
       img/CYBERFICTION-IMAGES/male0215.png
       img/CYBERFICTION-IMAGES/male0216.png
       img/CYBERFICTION-IMAGES/male0217.png
       img/CYBERFICTION-IMAGES/male0218.png
       img/CYBERFICTION-IMAGES/male0219.png
       img/CYBERFICTION-IMAGES/male0220.png
       img/CYBERFICTION-IMAGES/male0221.png
       img/CYBERFICTION-IMAGES/male0222.png
       img/CYBERFICTION-IMAGES/male0223.png
       img/CYBERFICTION-IMAGES/male0224.png
       img/CYBERFICTION-IMAGES/male0225.png
       img/CYBERFICTION-IMAGES/male0226.png
       img/CYBERFICTION-IMAGES/male0227.png
       img/CYBERFICTION-IMAGES/male0228.png
       img/CYBERFICTION-IMAGES/male0229.png
       img/CYBERFICTION-IMAGES/male0230.png
       img/CYBERFICTION-IMAGES/male0231.png
       img/CYBERFICTION-IMAGES/male0232.png
       img/CYBERFICTION-IMAGES/male0233.png
       img/CYBERFICTION-IMAGES/male0234.png
       img/CYBERFICTION-IMAGES/male0235.png
       img/CYBERFICTION-IMAGES/male0236.png
       img/CYBERFICTION-IMAGES/male0237.png
       img/CYBERFICTION-IMAGES/male0238.png
       img/CYBERFICTION-IMAGES/male0239.png
       img/CYBERFICTION-IMAGES/male0240.png
       img/CYBERFICTION-IMAGES/male0241.png
       img/CYBERFICTION-IMAGES/male0242.png
       img/CYBERFICTION-IMAGES/male0243.png
       img/CYBERFICTION-IMAGES/male0244.png
       img/CYBERFICTION-IMAGES/male0245.png
       img/CYBERFICTION-IMAGES/male0246.png
       img/CYBERFICTION-IMAGES/male0247.png
       img/CYBERFICTION-IMAGES/male0248.png
       img/CYBERFICTION-IMAGES/male0249.png
       img/CYBERFICTION-IMAGES/male0250.png
       img/CYBERFICTION-IMAGES/male0251.png
       img/CYBERFICTION-IMAGES/male0252.png
       img/CYBERFICTION-IMAGES/male0253.png
       img/CYBERFICTION-IMAGES/male0254.png
       img/CYBERFICTION-IMAGES/male0255.png
       img/CYBERFICTION-IMAGES/male0256.png
       img/CYBERFICTION-IMAGES/male0257.png
       img/CYBERFICTION-IMAGES/male0258.png
       img/CYBERFICTION-IMAGES/male0259.png
       img/CYBERFICTION-IMAGES/male0260.png
       img/CYBERFICTION-IMAGES/male0261.png
       img/CYBERFICTION-IMAGES/male0262.png
       img/CYBERFICTION-IMAGES/male0263.png
       img/CYBERFICTION-IMAGES/male0264.png
       img/CYBERFICTION-IMAGES/male0265.png
       img/CYBERFICTION-IMAGES/male0266.png
       img/CYBERFICTION-IMAGES/male0267.png
       img/CYBERFICTION-IMAGES/male0268.png
       img/CYBERFICTION-IMAGES/male0269.png
       img/CYBERFICTION-IMAGES/male0270.png
       img/CYBERFICTION-IMAGES/male0271.png
       img/CYBERFICTION-IMAGES/male0272.png
       img/CYBERFICTION-IMAGES/male0273.png
       img/CYBERFICTION-IMAGES/male0274.png
       img/CYBERFICTION-IMAGES/male0275.png
       img/CYBERFICTION-IMAGES/male0276.png
       img/CYBERFICTION-IMAGES/male0277.png
       img/CYBERFICTION-IMAGES/male0278.png
       img/CYBERFICTION-IMAGES/male0279.png
       img/CYBERFICTION-IMAGES/male0280.png
       img/CYBERFICTION-IMAGES/male0281.png
       img/CYBERFICTION-IMAGES/male0282.png
       img/CYBERFICTION-IMAGES/male0283.png
       img/CYBERFICTION-IMAGES/male0284.png
       img/CYBERFICTION-IMAGES/male0285.png
       img/CYBERFICTION-IMAGES/male0286.png
       img/CYBERFICTION-IMAGES/male0287.png
       img/CYBERFICTION-IMAGES/male0288.png
       img/CYBERFICTION-IMAGES/male0289.png
       img/CYBERFICTION-IMAGES/male0290.png
       img/CYBERFICTION-IMAGES/male0291.png
       img/CYBERFICTION-IMAGES/male0292.png
       img/CYBERFICTION-IMAGES/male0293.png
       img/CYBERFICTION-IMAGES/male0294.png
       img/CYBERFICTION-IMAGES/male0295.png
       img/CYBERFICTION-IMAGES/male0296.png
       img/CYBERFICTION-IMAGES/male0297.png
       img/CYBERFICTION-IMAGES/male0298.png
       img/CYBERFICTION-IMAGES/male0299.png
       img/CYBERFICTION-IMAGES/male0300.png
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
    markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });

gsap.to("#page1",{
    scrollTrigger:{
        trigger: '#page1',
        start: 'top top',
        end: 'bottom top',
        markers:true,
        pin:true,
        scroller:'#main'
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger: '#page2',
        start: 'top top',
        end: 'bottom top',
        markers:true,
        pin:true,
        scroller:'#main'
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger: '#page3',
        start: 'top top',
        end: 'bottom top',
        markers:true,
        pin:true,
        scroller:'#main'
    }
})
