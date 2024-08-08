function getStyle(dom, attr, str) {
                if (str === undefined) {
                    return window.getComputedStyle(dom)[attr];
                } else {
                    return window.getComputedStyle(dom, str)[attr];
                }
            }
