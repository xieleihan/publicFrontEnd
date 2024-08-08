function $(cssStr) {
                var dom = document.querySelectorAll(cssStr);
                if (dom.length === 0) {
                    return null;
                }
                if (dom.length === 1) {
                    return dom[0];
                }
                return dom;
            }
