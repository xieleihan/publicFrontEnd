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

            // 函数节流的实现-使用延时器完成节流函数(第一次不触发,最后一次触发)
            // 原理：当触发事件的时候，设置一个延时器，再触发事件的时候，如果延时器不存在, 才执行函数;  如果延时器存在，就不执行函数，直到延时器执行完毕，清空延时器，再设置下个延时器。
            function mythrottle2(func, wait) {
                // 延时器标识符
                var timeroutId = null;
                // this对象
                var thisObj = null;
                // arguments对象
                var args = null;

                // 返回一个新函数
                return function () {
                    // 赋值
                    thisObj = this;
                    args = arguments;

                    // 判断延时器是否存在
                    if (timeroutId === null) {
                        // 如果延时器不存在,开启新的延时器
                        timeroutId = setTimeout(function () {
                            // 调用func函数
                            func.apply(thisObj, args);
                            // 清空延时器标识符
                            timeroutId = null;
                        }, wait);
                    }
                };
            }
