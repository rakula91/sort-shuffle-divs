function sortAndShuffle(isSort) {
    var dom = document.getElementsByClassName('section-1')[0];
    var list = dom.children;
    list = Array.prototype.slice.call(list, 0);
    if (isSort) {
        list.sort(function (a, b) {
            var ord1 = +a.classList.value.split('-')[1];
            var ord2 = +b.classList.value.split('-')[1];
            return (ord1 > ord2) ? 1 : -1;
        });
    } else {
        list.sort(function (a, b) {
            return Math.random() >= 0.5 ? 1 : -1;
        });
    }
    dom.innerHTML = "";
    for (var i = 0, l = list.length; i < l; i++) {
        dom.appendChild(list[i]);
    }
}