// 函数节流的实现-使用时间戳完成节流函数(第一次触发,最后一次不触发)
            function mythrottle1(func, wait) {
                // 定义一个变量保存this对象
                var thisObj = null;
                // 定义一个变量,保存arguments对象
                var args = null;
                // 之前的时间戳
                var old = 0;

                // 返回新函数
                return function () {
                    // 保存此时的this对象
                    thisObj = this;
                    // 保存此时的arguments对象
                    args = arguments;
                    // 获取现在的时间戳
                    var now = new Date().getTime();
                    // 判断now-old两个时间戳之差是否大于等于wait
                    if (now - old > wait) {
                        // 调用func()函数
                        func.apply(thisObj, args);
                        // 更新时间戳
                        old = now;
                    }
                };
            }
