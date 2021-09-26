window.dom = {
    find(selector) {
        return document.querySelectorAll(selector);
    },
    style(node, name, value) {
        node.style[name] = value;
    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn(nodes[i]);
        }
    }
}