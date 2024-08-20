// 封装jsonp函数
            function myJsonp(options) {
                /* options是一个参数对象
                {
                    url:请求的地址,
                    data:请求的参数对象
                    callbackName:回调函数名称
                } */

                // 判断参数对象中,是否存在callbackName对应的值
                if (options.callbackName === undefined) {
                    options.callbackName = "callback";
                }

                // 参数字符串
                var paramStr = "";
                for (var attr in options.data) {
                    var keyName = attr;
                    var keyVal = options.data[attr];
                    paramStr = paramStr + "&" + keyName + "=" + keyVal;
                }
                // 去掉第一个字符
                paramStr = paramStr.slice(1);

                // 判断url中是否存在?
                if (options.url.indexOf("?") === -1) {
                    options.url = options.url + "?" + paramStr;
                } else {
                    options.url = options.url + "&" + paramStr;
                }
                //通过JS动态创建script标签(script标签是HTML标签的一种)
                var newScript = document.createElement("script");
                // 定义一个随机函数名
                var funName = "myJsonp" + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
                // 把options.success挂载到全局window对象的函数中
                window[funName] = options.success;
                // 设置script标签的src属性
                newScript.src = options.url + "&" + options.callbackName + "=" + funName;
                // 把script标签添加到body对象中
                document.body.appendChild(newScript);
                // 当该script标签加载完毕以后,删除该标签
                newScript.onload = function () {
                    this.remove();
                };
            }
