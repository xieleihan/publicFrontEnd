            function getTemplateTime(templateStr, date) {
                // console.log("templateStr=>", templateStr);
                // console.log("date=>", date);
                // console.log("");
                // 取出日期对象中的年月份,时分秒
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var currentDate = date.getDate();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                // console.log(year, month, currentDate, h, m, s);
                // console.log("");

                // 先替换年份
                templateStr = templateStr.replace(/y{2,4}/gi, function (res) {
                    // console.log(res, res.length, year, year.toString(), year.toString().substr(4 - res.length));
                    // YYYY=> 2024  长度4   4-4   substr(0)
                    // YYY => 024  长度3    4-3   substr(1)
                    // YY  => 24   长度2    4-2   substr(2)
                    return year.toString().substr(4 - res.length);
                });
                // console.log(templateStr);
                // console.log("");

                // 继续替换其他的
                // 使用一个对象保存数据
                var obj = {
                    "M{1,2}": month,
                    "d{1,2}": currentDate,
                    "h{1,2}": h,
                    "m{1,2}": m,
                    "s{1,2}": s,
                };
                // 遍历对象
                for (var attr in obj) {
                    // 根据attr创建正则对象
                    var reg = new RegExp(attr, "g");
                    // 字符串替换
                    templateStr = templateStr.replace(reg, function (res) {
                        if (res.length === 1) {
                            return obj[attr];
                        }
                        return obj[attr] < 10 ? "0" + obj[attr] : obj[attr];
                    });
                }
                // console.log(templateStr);
                return templateStr;
            }
