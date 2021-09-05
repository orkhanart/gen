var canvas, ctx;
var width;
var height;
var centerx;
var centery;
var onj1, obj2, obj3, obj4, obj5;
var data = [];
var renderme = false; //square, shape, anime

// objects :----------------------------------------------------
function Initer(x, y, w, h, a, r, g, b, no, prm) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.no = no;
    this.prm = prm;
    var hsl = rgbToHsl(this.r, this.g, this.b);
    this.ch = hsl.h;
    this.cs = hsl.s;
    this.cl = hsl.l;
    this.centerx = this.x + (this.w / 2);
    this.centery = this.y + (this.h / 2);
    this.getcoo = function(cx, cy, px, py, a) {
        return getpoint(cx, cy, getdistance(cx, cy, px, py), getangle(cx, cy, px, py) + torad(a));
    }
    this.create = function(addx, addy, adw, adh, addr, hsl) {

        var p1x = this.x + addx;
        var p1y = this.y + addy;
        var p2x = this.x + addx + this.w + adw;
        var p2y = this.y + addy;
        var p3x = this.x + addx + this.w + adw;
        var p3y = this.y + addy + this.h + adh;
        var p4x = this.x + addx;
        var p4y = this.y + this.h + adh;
        var an1 = this.getcoo(this.centerx, this.centery, p1x, p1y, this.a);
        var an2 = this.getcoo(this.centerx, this.centery, p2x, p2y, this.a);
        var an3 = this.getcoo(this.centerx, this.centery, p3x, p3y, this.a);
        var an4 = this.getcoo(this.centerx, this.centery, p4x, p4y, this.a);
        var f1 = this.getcoo(centerx, centery, an1.x, an1.y, addr);
        var f2 = this.getcoo(centerx, centery, an2.x, an2.y, addr);
        var f3 = this.getcoo(centerx, centery, an3.x, an3.y, addr);
        var f4 = this.getcoo(centerx, centery, an4.x, an4.y, addr);

        var cbc = [{ "x": f1.x, "y": f1.y }, { "x": f2.x, "y": f2.y }, { "x": f3.x, "y": f3.y }, { "x": f4.x, "y": f4.y }, hsl];

        return cbc;

    }
    this.add = function() {
        var xplus = 0,
            yplus = 0,
            wplus = 0,
            hplus = 0,
            aplus = 0,
            newhue = this.ch;
        for (var i = 0; i < no; i++) {
            //console.log({"h":newhue,"s":this.cs,"l":this.cl});
            var prd = this.create(xplus, yplus, wplus, hplus, aplus, { "h": newhue, "s": this.cs, "l": this.cl });
            data.push(prd)
            xplus += prm.x;
            xplus += prm.y;
            wplus += prm.w;
            hplus += prm.h;
            aplus += prm.a;
            if (newhue > -1) newhue -= 0.02;
            else newhue = 0;
        }

    }
    this.add();
    this.drawshape = function() {
        var prd = this.create(0, 0, 0, 0, 0, { "h": this.ch, "s": this.cs, "l": this.cl });
        drawshape(prd);
    }
    this.drawsquare = function() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}



//functions :-----------------------------------------------
function drawshape(coo) {
    //ctx.rotate(10);

    var rgb = hslToRgb(coo[4].h, coo[4].s, coo[4].l);

    ctx.beginPath();
    ctx.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    ctx.moveTo(coo[0].x, coo[0].y);
    ctx.lineTo(coo[1].x, coo[1].y);
    ctx.lineTo(coo[2].x, coo[2].y);
    ctx.lineTo(coo[3].x, coo[3].y);
    ctx.closePath();
    ctx.fill();
}

function torad(a) {
    return a * (Math.PI / 180)
}

function todeg(a) {
    return a * (180 / Math.PI)
}

function getdistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function getangle(x1, y1, x2, y2) {
    return -Math.atan2(x2 - x1, y2 - y1) + 1.5707963267948966; // radians (to deg = a * 180 / Math.PI;
}

function getpoint(x, y, l, a) {
    var px = x + l * Math.cos(a);
    var py = y + l * Math.sin(a);
    return { "x": px, "y": py };
}

function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return ({ h: h, s: s, l: l });
}

function hslToRgb(h, s, l) {
    var r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return ({
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    });
}

function drawscene() { // main drawScene function
    if (renderme) {
        clear(); // clear canvas
        for (var i = 0; i < data.length; i++) {
            var shp = data[i];
            drawshape(shp);
            if (shp[4].h > -1) shp[4].h -= 0.002;
            else shp[4].h = 0;
        }
    }
}

// initialization-----------------------------------------

$(function() {
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    width = canvas.width;
    height = canvas.height;
    centerx = width / 2;
    centery = height / 2;

    //init squares
    obj1 = new Initer(50, 100, 50, 240, 3043, 255, 17, 153, 304, { "x": 1, "y": 20, "w": 103, "h": -13, "a": 1 }); //x,y,w,h,a,r,g,b,no,params
    obj2 = new Initer(1, 200, 204, 154, 42, 1040, 2400, 130, 30, { "x": 0, "y": -2, "w": -2, "h": 0.5, "a": 4 }); //x,y,w,h,a,r,g,b,no,params
    obj3 = new Initer(455, 200, 204, 15, 2, 100, 200, 130, 30, { "x": 0, "y": -2, "w": -2, "h": 0.5, "a": 4 }); //x,y,w,h,a,r,g,b,no,params
    //obj3 =
    //obj4 =
    //obj5 =

    //draw squares
    //obj1.drawsquare();

    //draw shapes
    //obj1.drawshape();

    //start animation
    renderme = true;
    setInterval(drawscene, 30); // loop drawScene
});