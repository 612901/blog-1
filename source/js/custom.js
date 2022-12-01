// 浏览器动态标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'w(ﾟДﾟ)w 不要走鸭！再看看吧！！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '♪(^∇^*) 又见面了！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

//开发者模式监测
window.onkeydown = function (e) {
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3);
  console.warn("开发者模式已打开，请遵循GPL协议");
};

// 适应窗口大小
function winResize() {
  var offsetWid = document.documentElement.clientWidth;
  if (offsetWid <= 768) {
      winbox.resize(offsetWid * 0.95 + "px", "70%").move("center", "center");
  } else {
      winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
  }
}



/**网站提示区 */
function welcome_mes() {
  if (navigator.userAgent.match(/edg/i)) {
    var we_mes = 'Edge';
  }
  /**社交软件检测 */
  else if (navigator.userAgent.match(/weixin/i)) {
    var we_mes = '微信';
  } else if (navigator.userAgent.match(/ks/i)) {
    var we_mes = '快手';
  } else if (navigator.userAgent.match(/weibo/i)) {
    var we_mes = '微博';
  } else if (navigator.userAgent.match(/dy/i)) {
    var we_mes = '抖音';
  }
  /**手机厂商浏览器检测区域 */
  else if (navigator.userAgent.match(/heytapbrowser/i)) {
    var we_mes = 'OPPO浏览器';
  } else if (navigator.userAgent.match(/vivobrowser/i)) {
    var we_mes = 'VIVO浏览器';
  } else if (navigator.userAgent.match(/HBPC/i) || navigator.userAgent.match(/huaweibrowser/i)) {
    var we_mes = '华为浏览器';
  } else if (navigator.userAgent.match(/iphone/i) && navigator.userAgent.match(/mac/i)) {
    var we_mes = '苹果设备';
  }

  /**第三方浏览器检测区域 */
  else if (navigator.userAgent.match(/quark/i)) {
    var we_mes = '夸克浏览器';
  } else if (navigator.userAgent.match(/firefox/i)) {
    var we_mes = '火狐浏览器';
  } else if (navigator.userAgent.match(/ucbrowser/i)) {
    var we_mes = 'UC浏览器';
  } else if (navigator.userAgent.match(/baidubox/i)) {
    var we_mes = '百度浏览器';
  } else if (navigator.userAgent.match(/opr/i)) {
    var we_mes = 'Opera浏览器';
  }
  /**else if(navigator.userAgent.match(/360/i)){ var we_mes = '360浏览器';}因多次查证，360浏览器并不包含特有信息，无法查证*/
  else if (navigator.userAgent.match(/qq/i)) {
    var we_mes = 'QQ浏览器';
  } else if (navigator.userAgent.match(/chrome/i)) {
    var we_mes = 'Chrome浏览器';
  }

 

  /**来源检测 */
  var we_link = document.referrer;
  if (we_link.match(/baidu/i)) {
    var welcome_link = '百度'
  } else if (we_link.match(/sougou/i)) {
    var welcome_link = '搜狗'
  } else if (we_link.match(/weixin/i)) {
    var welcome_link = '微信'
  } else if (we_link.match(/qq/i)) {
    var welcome_link = 'qq'
  } else if (we_link.match(/zhihu/i)) {
    var welcome_link = '知乎'
  } else if (we_link.match(/google/i)) {
    var welcome_link = '谷歌'
  } else if (we_link.match(/bing/i)) {
    var welcome_link = '必应'
  } else if (we_link.match(/so/i)) {
    var welcome_link = '360'
  } else if (we_link.match(/weibo/i)) {
    var welcome_link = '微博'
  } else if (we_link.match(/t.co/i)) {
    var welcome_link = '推特'
  } else if (we_link.match(/sougou/i)) {
    var welcome_link = '搜狗'
  } else if (we_link.match(/toutiao/i)) {
    var welcome_link = '今日头条'
  } else {
    var welcome_link = '远方'
  }
  if (getCookie("welcome") == '') {
    btf.snackbarShow("你好啊，来自" + ip_mess + "的朋友，您使用" + we_mes + "从" + welcome_link + "赶来", !1, 3e3);
    console.info(ip_mess+we_mes+we_link)
    setCookie("welcome", 1, "/");
  }
}



// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~").innerText=document.title.split(" |Xlenco")[0];
}

// 颜色
!function(n){"use strict";var t=function(){return document.createElement("canvas").getContext("2d")},e=function(n,e){var a=new Image,o=n.src||n;"data:"!==o.substring(0,5)&&(a.crossOrigin="Anonymous"),a.onload=function(){var n=t("2d");n.drawImage(a,0,0);var o=n.getImageData(0,0,a.width,a.height);e&&e(o.data)},a.src=o},a=function(n){return["rgb(",n,")"].join("")},o=function(n){return n.map(function(n){return a(n.name)})},r=5,i=10,c={};c.colors=function(n,t){t=t||{};var c=t.exclude||[],u=t.paletteSize||i;e(n,function(e){for(var i=n.width*n.height||e.length,m={},s="",d=[],f={dominant:{name:"",count:0},palette:Array.apply(null,new Array(u)).map(Boolean).map(function(){return{name:"0,0,0",count:0}})},l=0;i>l;){if(d[0]=e[l],d[1]=e[l+1],d[2]=e[l+2],s=d.join(","),m[s]=s in m?m[s]+1:1,-1===c.indexOf(a(s))){var g=m[s];g>f.dominant.count?(f.dominant.name=s,f.dominant.count=g):f.palette.some(function(n){return g>n.count?(n.name=s,n.count=g,!0):void 0})}l+=4*r}if(t.success){var p=o(f.palette);t.success({dominant:a(f.dominant.name),secondary:p[0],palette:p})}})},n.RGBaster=n.RGBaster||c}(window);

// 封面纯色
function coverColor() {
    var path = document.getElementById("post-cover")?.src;
    if (path !== undefined) {
        RGBaster.colors(path, {
            paletteSize: 30,
            exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"],
            success: function (t) {
                if (t.dominant != 'rgb(66,90,239)') {
                    const c = t.dominant.match(/\d+/g);
                    var value = `rgb(${c[0]},${c[1]},${c[2]})`;
                    if (getContrastYIQ(colorHex(value)) == "light") {
                        value = LightenDarkenColor(colorHex(value), -40)
                    }
                    document.styleSheets[0].addRule(':root', '--Jay-main:' + value + '!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-op:' + value + '23!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-op-deep:' + value + 'dd!important');
                    document.styleSheets[0].addRule(':root', '--Jay-main-none:' + value + '00!important');
                    Jay.initThemeColor()
                    document.getElementById("coverdiv").classList.add("loaded");
                }
            }
        });

    } else {
        document.styleSheets[0].addRule(':root', '--Jay-main: var(--Jay-theme)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-op: var(--Jay-theme-op)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-op-deep:var(--Jay-theme-op-deep)!important');
        document.styleSheets[0].addRule(':root', '--Jay-main-none: var(--Jay-theme-none)!important');
        Jay.initThemeColor()
    }
}

// RGB颜色转化为16进制颜色
function colorHex(str) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var that = str;
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return that;
    }
}

// 16进制颜色转化为RGB颜色
function colorRgb(str) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = str.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgb(" + sColorChange.join(",") + ")";
    } else {
        return sColor;
    }
}

// 变暗变亮主方法
function LightenDarkenColor(col, amt) {
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;


    return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}

// 判断是否为亮色
function getContrastYIQ(hexcolor) {
    var colorrgb = colorRgb(hexcolor);
    var colors = colorrgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var red = colors[1];
    var green = colors[2];
    var blue = colors[3];
    var brightness;
    brightness = (red * 299) + (green * 587) + (blue * 114);
    brightness = brightness / 255000;
    if (brightness >= 0.5) {
        return "light";
    } else {
        return "dark";
    }
}
coverColor()
