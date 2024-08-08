function mythrottle3(func, wait) {
                // 定义一个变量保存this对象
                var thisObj = null;
                // 定义一个变量,保存arguments对象
                var args = null;
                // 之前的时间戳
                var old = 0;
                // 延时器标识符
                var timeroutId = null;
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
                        // 清除延时器
                        clearTimeout(timeroutId);
                        timeroutId = null;
                    }
                    // 判断延时器是否存在
                    if (timeroutId === null) {
                        // 如果延时器不存在,开启新的延时器
                        timeroutId = setTimeout(function () {
                            // 调用func函数
                            func.apply(thisObj, args);
                            // 清空延时器标识符
                            timeroutId = null;
                            // 重新获取现在最新的时间戳
                            now = new Date().getTime();
                            // 把now的值赋给old, 更新old的值
                            old = now;
                        }, wait);
                    }
                };
            }
