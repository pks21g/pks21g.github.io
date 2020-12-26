
// for the 
var getText = function(el, toRotate, text) {
    this.toRotate = toRotate;
    this.el = el;
    this.count = 0;
    this.text = parseInt(text, 10) || 2000;
    this.txt = '';
    this.tick();
    this.remove = false;
};

getText.prototype.tick = function() {
    var i = this.count % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.remove) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.remove) { delta /= 2; }

    if (!this.remove && this.txt === fullTxt) {
    delta = this.text;
    this.remove = true;
    } else if (this.remove && this.txt === '') {
    this.remove = false;
    this.count++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('greet');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var text = elements[i].getAttribute('data-text');
        if (toRotate) {
          new getText(elements[i], JSON.parse(toRotate), text);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    // css.type = "text/css";
    css.innerHTML = ".greet > .wrap { border-right: 0.1em solid white}";
    document.body.appendChild(css);
};