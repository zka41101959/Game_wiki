var Top_Weibo = document.getElementById('SI_Top_Weibo');
var weibo = document.getElementById('weibo');
var weibo_list = document.getElementById('weibo_list');
var lis = document.querySelectorAll('li');
Top_Weibo.onmouseover = function() {
    weibo.style.backgroundColor = '#004d22';
    weibo_list.style.display = 'block';
}
Top_Weibo.onmouseout = function() {
    weibo.style.backgroundColor = '';
    weibo_list.style.display = 'none';
}
weibo.onmouseover = function() {
    this.style.color = '#ff8400';
}
weibo.onmouseout = function() {
    this.style.color = 'black';
}
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
        this.style.color = '#ff8400';
        this.style.backgroundColor = '#fff5da';
    }
    lis[i].onmouseout = function() {
        this.style.color = '#4c4c4c';
        this.style.backgroundColor = '';
    }
}