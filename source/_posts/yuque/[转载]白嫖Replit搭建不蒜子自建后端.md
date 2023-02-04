---
categories: 转载
cover: "https://xlenco.onmicrosoft.cn/img/wd9aag8.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670823328274"
date: "2022-08-06 22:50:52"
tags:
  - Python

title: "[转载]白嫖Replit搭建不蒜子自建后端"
updated: "2022-08-07 07:36:51"
abbrlink: d80b
---

### 不蒜子自建后端 API 🗺️

> Powered by: 🚀 FastAPI + Redis ✨ [ ~5ms 处理一次请求 ]

> 项目官网以及详情介绍 ：[https://busuanzi.icodeq.com](https://busuanzi.icodeq.com)

> 官网归档地址：[https://github.com/zkeq/Busuanzi](https://github.com/zkeq/Busuanzi)

### 安装

##### 个人版

- 点击一键部署：![](https://replit.com/badge/github/zkeq/Busuanzi_backend_self#id=IXAGh&originHeight=36&originWidth=130&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
  本项目使用 `Redis` 做数据库， 空转占用内存大概 `200M`，请按需规划。
- 成功导入后点击 🏃 `RUN` 按钮，即可完成安装！

##### 教育版 or 专业版

> 【资源额度更高，但好像无法一键导入】

1. 创建新项目  [点击下载本源码](https://url66.ctfile.com/f/30717266-633476536-e79d59?p=abcd) -密码 abcd（已高速）
2. 复制本项目的文件到上一步创建的项目中
3. 点击 🏃 `RUN` 按钮，即可完成安装！

出现下图表示安装成功！~（首次会同步 `busuanzi` 的数据，多次尝试属于正常状态）~ :

![](https://user-images.githubusercontent.com/62864752/164993786-8e4871a2-883e-493e-b19a-76a0d900a95c.png#id=CI4fy&originHeight=767&originWidth=1440&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 使用

- 将 `不蒜子` 官网提供的 `js` 代码里面的网址，改成你的 **即可**

```javascript
//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js

var bszCaller, bszTag;
!(function () {
  var c,
    d,
    e,
    a = !1,
    b = [];
  (ready = function (c) {
    return (
      a ||
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? c.call(document)
        : b.push(function () {
            return c.call(this);
          }),
      this
    );
  }),
    (d = function () {
      for (var a = 0, c = b.length; c > a; a++) b[a].apply(document);
      b = [];
    }),
    (e = function () {
      a ||
        ((a = !0),
        d.call(window),
        document.removeEventListener
          ? document.removeEventListener("DOMContentLoaded", e, !1)
          : document.attachEvent &&
            (document.detachEvent("onreadystatechange", e),
            window == window.top && (clearInterval(c), (c = null))));
    }),
    document.addEventListener
      ? document.addEventListener("DOMContentLoaded", e, !1)
      : document.attachEvent &&
        (document.attachEvent("onreadystatechange", function () {
          /loaded|complete/.test(document.readyState) && e();
        }),
        window == window.top &&
          (c = setInterval(function () {
            try {
              a || document.documentElement.doScroll("left");
            } catch (b) {
              return;
            }
            e();
          }, 5)));
})(),
  (bszCaller = {
    fetch: function (a, b) {
      var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
      (window[c] = this.evalCall(b)),
        (a = a.replace("=BusuanziCallback", "=" + c)),
        (scriptTag = document.createElement("SCRIPT")),
        (scriptTag.type = "text/javascript"),
        (scriptTag.defer = !0),
        (scriptTag.src = a),
        (scriptTag.referrerPolicy = "no-referrer-when-downgrade"),
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
    },
    evalCall: function (a) {
      return function (b) {
        ready(function () {
          try {
            a(b), scriptTag.parentElement.removeChild(scriptTag);
          } catch (c) {
            bszTag.hides();
          }
        });
      };
    },
  }),
  bszCaller.fetch(
    "//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
    function (a) {
      bszTag.texts(a), bszTag.shows();
    }
  ),
  (bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function (a) {
      this.bszs.map(function (b) {
        var c = document.getElementById("busuanzi_value_" + b);
        c && (c.innerHTML = a[b]);
      });
    },
    hides: function () {
      this.bszs.map(function (a) {
        var b = document.getElementById("busuanzi_container_" + a);
        b && (b.style.display = "none");
      });
    },
    shows: function () {
      this.bszs.map(function (a) {
        var b = document.getElementById("busuanzi_container_" + a);
        b && (b.style.display = "inline");
      });
    },
  });
```

```

把里面的这个链接

//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback

改成

你的域名，例如：

https://counter.busuanzi.icodeq.com/?jsonpCallback=BusuanziCallback
```

- 把你网站引入的 `busuanzi.pure.mini.js` 地址替换为上一步改好的 `js` 文件 ✨
