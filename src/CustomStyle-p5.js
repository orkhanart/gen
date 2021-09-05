import React, { useRef } from 'react';
import Sketch from 'react-p5';
import MersenneTwister from 'mersenne-twister';

/*
Create your Custom style to be turned into a EthBlock.art Mother NFT

Basic rules:
 - use a minimum of 1 and a maximum of 4 "modifiers", modifiers are values between 0 and 1,
 - use a minimum of 1 and a maximum of 3 colors, the color "background" will be set at the canvas root
 - Use the block as source of entropy, no Math.random() allowed!
 - You can use a "shuffle bag" using data from the block as seed, a MersenneTwister library is provided

 Arguments:
  - block: the blockData, in this example template you are given 3 different blocks to experiment with variations, check App.js to learn more
  - mod[1-3]: template modifier arguments with arbitrary defaults to get your started
  - color: template color argument with arbitrary default to get you started

Getting started:
 - Write p5.js code, comsuming the block data and modifier arguments,
   make it cool and use no random() internally, component must be pure, output deterministic
 - Customize the list of arguments as you wish, given the rules listed below
 - Provide a set of initial /default values for the implemented arguments, your preset.
 - Think about easter eggs / rare attributes, display something different every 100 blocks? display something unique with 1% chance?

 - check out p5.js documentation for examples!
*/

//

let DEFAULT_SIZE = 500;
var themes = [];
const CustomStyle = ({
    block,
    canvasRef,
    attributesRef,
    width,
    height,
    handleResize,
    mod1, // Example: replace any number in the code with mod1, mod2, or color values
    mod2,
    mod3,
    mod4,
    mod5,
    color1 = '#4f83f1',
    background = '#ccc',
}) => {
    const shuffleBag = useRef();
    const hoistedValue = useRef();

    const { hash } = block;

    // setup() initializes p5 and the canvas element, can be mostly ignored in our case (check draw())
    const setup = (p5, canvasParentRef) => {
        // Keep reference of canvas element for snapshots
        p5.createCanvas(width, height).parent(canvasParentRef);
        canvasRef.current = p5;

        //console.log(block)

        attributesRef.current = () => {
            return {
                // This is called when the final image is generated, when creator opens the Mint NFT modal.
                // should return an object structured following opensea/enjin metadata spec for attributes/properties
                // https://docs.opensea.io/docs/metadata-standards
                // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema

                attributes: [{
                        display_type: 'number',
                        trait_type: 'your trait here number',
                        value: hoistedValue.current, // using the hoisted value from within the draw() method, stored in the ref.
                    },

                    {
                        trait_type: 'your trait here text',
                        value: 'replace me',
                    },
                ],
            };
        };
    };

    // draw() is called right after setup and in a loop
    // disabling the loop prevents controls from working correctly
    // code must be deterministic so every loop instance results in the same output

    // Basic example of a drawing something using:
    // a) the block hash as initial seed (shuffleBag)
    // b) individual transactions in a block (seed)
    // c) custom parameters creators can customize (mod1, color1)
    // d) final drawing reacting to screen resizing (M)
    const draw = (p5) => {
        let WIDTH = width;
        let HEIGHT = height;
        let DIM = Math.min(WIDTH, HEIGHT);
        let M = DIM / DEFAULT_SIZE;

        p5.background(background);

        if (themes[Math.floor(mod1 * 10)]) {
            for (var s of themes[Math.floor(mod1 * 10)]) {
                s.draw(3 * mod2 + 0.1, 3 * mod3, mod4 + 0.1, mod5 + 0.1);
            }
        }

        var spiralCount = 1;
        if (themes.length == 0 && block.transactions.length > spiralCount * 2) {
            var sl = block.transactions.slice(-spiralCount * 2);
            //console.log(sl)

            function toNum(s) {
                return parseInt(s, 16).toString().split("").map(x => parseInt(isNaN(x) ? 0 : x)).reduce((c, x) => c + x)
            }

            var t1 = sl[0];
            var t2 = sl[0 + 1]

            p5.randomSeed(t1.number + t2.number)

            var k = p5.width / 200;

            themes = [
                [ //THEME 1
                    new RectSpiral(canvasRef.current, 1 / 2, 1 / 2,
                        130, //canvasRef.current.max(10, Math.sqrt(t1.nonce + t2.nonce) / 10),
                        canvasRef.current.CENTER,
                        0, // toNum(t1.from) / 7,
                        0, // toNum(t1.to) / 7,
                        20 * k, // p5.max(toNum(t1.gasLimit.hex), 2) * p5.random(3, 30),
                        18 * k, // p5.max(toNum(t2.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 10, // 25 / toNum(t1.s),
                        toNum(t1.r) / 50,
                        Math.PI * -1.3 * toNum(t2.r) / 100, // toNum(t2.from) / 7,
                        Math.PI * 2, // toNum(t2.to) / 7,
                        40 * k, // p5.max(toNum(t2.gasLimit.hex), 2) * p5.random(3, 30),
                        0.25 * k, // p5.max(toNum(t1.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 2.5, // 25 / toNum(t2.s),
                        p5.random(0, 1), //toNum(t2.r) / 50
                        p5.random(0, 1),
                        p5.random() < 0.001
                    ),
                    new RectSpiral(canvasRef.current, 1 / 2, 1 / 2,
                        140, //canvasRef.current.max(10, Math.sqrt(t1.nonce + t2.nonce) / 10),
                        canvasRef.current.CORNER,
                        Math.PI / 2, // toNum(t1.from) / 7,
                        0, // toNum(t1.to) / 7,
                        20 * k, // p5.max(toNum(t1.gasLimit.hex), 2) * p5.random(3, 30),
                        5 * k, // p5.max(toNum(t2.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 25, // 25 / toNum(t1.s),
                        toNum(t1.r) / 50,
                        Math.PI * 1.75, // toNum(t2.from) / 7,
                        Math.PI * 1, // toNum(t2.to) / 7,
                        120 * k, // p5.max(toNum(t2.gasLimit.hex), 2) * p5.random(3, 30),
                        30 * k, // p5.max(toNum(t1.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 3, // 25 / toNum(t2.s),
                        p5.random(0, 1), //toNum(t2.r) / 50,
                        p5.random(0, 1),
                        p5.random() < 0.001
                    ),
                    new RectSpiral(canvasRef.current, 1 / 2, 1 / 2,
                        130, //canvasRef.current.max(10, Math.sqrt(t1.nonce + t2.nonce) / 10),
                        canvasRef.current.CENTER,
                        0, // toNum(t1.from) / 7,
                        Math.PI / 2, // toNum(t1.to) / 7,
                        100 * k, // p5.max(toNum(t1.gasLimit.hex), 2) * p5.random(3, 30),
                        2 * k, // p5.max(toNum(t2.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 3, // 25 / toNum(t1.s),
                        toNum(t1.r) / 50, -Math.PI * 2, // toNum(t2.from) / 7,
                        Math.PI / 2, // toNum(t2.to) / 7,
                        -100 * k, // p5.max(toNum(t2.gasLimit.hex), 2) * p5.random(3, 30),
                        2 * k, // p5.max(toNum(t1.gasPrice.hex), 2) * p5.random(3, 30),
                        1 / 2.5, // 25 / toNum(t2.s),
                        p5.random(0, 1), //toNum(t2.r) / 50
                        p5.random(0, 1),
                        p5.random() < 0.001
                    )
                ]
            ]

        }
    };

    return <Sketch setup = { setup }
    draw = { draw }
    windowResized = { handleResize }
    />;
};

export default CustomStyle;

const styleMetadata = {
    name: '',
    description: '',
    image: '',
    creator_name: '',
    options: {
        mod1: Math.floor(Math.random() * 10),
        mod2: Math.random(),
        mod3: Math.random(),
        mod4: Math.random(),
        mod5: Math.random(),
        //color1: '#fff000',
        background: '#000000',
    },
};

export { styleMetadata };


class RectSpiral {
    constructor(p5,
        center_x,
        center_y,
        rectCount,
        rectMode,
        start_revolution,
        start_rot,
        start_w,
        start_h,
        start_radius,
        start_hue,
        end_revolution,
        end_rot,
        end_w,
        end_h,
        end_radius,
        end_hue,
        inc,
        greyscale
    ) {
        this.p5 = p5;

        this.center = this.p5.createVector(center_x, center_y)
        this.rectangleMode = rectMode;
        this.rectCount = rectCount;

        this.start = {
            rev: start_revolution,
            rot: start_rot,
            w: start_w,
            h: start_h,
            radius: start_radius,
            hue: start_hue
        }

        this.end = {
            rev: end_revolution,
            rot: end_rot,
            w: end_w,
            h: end_h,
            radius: end_radius,
            hue: end_hue
        }

        this.inc = inc;
        this.c = 0;
        this.greyscale = greyscale

        this.p5.colorMode(this.p5.HSL, 1)
        this.p5.rectMode(this.rectangleMode);
    }

    draw(mod1, mod2, mod3, mod4) {
        var p = this.p5;
        this.c += this.inc;
        p.push();

        p.noStroke();
        p.translate(this.center.x * p.width, this.center.y * p.height)

        var stepAngle = (this.end.rev - this.start.rev) / this.rectCount * mod1

        p.rotate(this.start.rev)
        for (var prog = 0; prog <= 1; prog += 1 / this.rectCount) {
            var stepR = p.lerp(this.start.radius, this.end.radius, prog) * p.width
            var stepRot = p.map(prog * mod2, 0, 1, this.start.rot, this.end.rot, false)
            var stepW = p.lerp(this.start.w, this.end.w, prog) * mod3
            var stepH = p.lerp(this.start.h, this.end.h, prog) * mod4
            var stepHue = (p.lerp(this.start.hue, this.end.hue, prog) + this.c / 300) % 1

            p.push();

            p.translate(0, stepR)
            p.rotate(stepRot)

            p.fill(stepHue, 1, 0.5)
            if (this.greyscale) p.fill(0, 0, stepHue)
            p.rect(0, 0, stepW, stepH)

            p.pop();

            p.rotate(stepAngle)
        }

        p.pop();
    }
}

////////////////////////////////////////////////////////////

// var canvas, ctx;
// var width;
// var height;
// var centerx;
// var centery;
// var obj1, obj2, obj3, obj4, obj5;
// var data = [];
// var renderme = false; //square, shape, anime

// function Initer(x, y, w, h, a, r, g, b, no, prm) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.a = a;
//     this.no = no;
//     this.prm = prm;
//     var hsl = rgbToHsl(this.r, this.g, this.b);
//     this.ch = hsl.h;
//     this.cs = hsl.s;
//     this.cl = hsl.l;
//     this.centerx = this.x + (this.w / 2);
//     this.centery = this.y + (this.h / 2);
//     this.getcoo = function(cx, cy, px, py, a) {
//         return getpoint(cx, cy, getdistance(cx, cy, px, py), getangle(cx, cy, px, py) + torad(a));
//     }
//     this.create = function(addx, addy, adw, adh, addr, hsl) {

//         var p1x = this.x + addx;
//         var p1y = this.y + addy;
//         var p2x = this.x + addx + this.w + adw;
//         var p2y = this.y + addy;
//         var p3x = this.x + addx + this.w + adw;
//         var p3y = this.y + addy + this.h + adh;
//         var p4x = this.x + addx;
//         var p4y = this.y + this.h + adh;
//         var an1 = this.getcoo(this.centerx, this.centery, p1x, p1y, this.a);
//         var an2 = this.getcoo(this.centerx, this.centery, p2x, p2y, this.a);
//         var an3 = this.getcoo(this.centerx, this.centery, p3x, p3y, this.a);
//         var an4 = this.getcoo(this.centerx, this.centery, p4x, p4y, this.a);
//         var f1 = this.getcoo(centerx, centery, an1.x, an1.y, addr);
//         var f2 = this.getcoo(centerx, centery, an2.x, an2.y, addr);
//         var f3 = this.getcoo(centerx, centery, an3.x, an3.y, addr);
//         var f4 = this.getcoo(centerx, centery, an4.x, an4.y, addr);

//         var cbc = [{ "x": f1.x, "y": f1.y }, { "x": f2.x, "y": f2.y }, { "x": f3.x, "y": f3.y }, { "x": f4.x, "y": f4.y }, hsl];

//         return cbc;

//     }
//     this.add = function() {
//         var xplus = 0,
//             yplus = 0,
//             wplus = 0,
//             hplus = 0,
//             aplus = 0,
//             newhue = this.ch;
//         for (var i = 0; i < no; i++) {
//             //console.log({"h":newhue,"s":this.cs,"l":this.cl});
//             var prd = this.create(xplus, yplus, wplus, hplus, aplus, { "h": newhue, "s": this.cs, "l": this.cl });
//             data.push(prd)
//             xplus += prm.x;
//             xplus += prm.y;
//             wplus += prm.w;
//             hplus += prm.h;
//             aplus += prm.a;
//             if (newhue > -1) newhue -= 0.02;
//             else newhue = 0;
//         }

//     }
//     this.add();
//     this.drawshape = function() {
//         var prd = this.create(0, 0, 0, 0, 0, { "h": this.ch, "s": this.cs, "l": this.cl });
//         drawshape(prd);
//     }
//     this.drawsquare = function() {
//         ctx.beginPath();
//         ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
//         ctx.fillRect(this.x, this.y, this.w, this.h);
//         ctx.closePath();
//     }
// }

// //functions :-----------------------------------------------
// function drawshape(coo) {
//     //ctx.rotate(10);

//     var rgb = hslToRgb(coo[4].h, coo[4].s, coo[4].l);

//     ctx.beginPath();
//     ctx.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
//     ctx.moveTo(coo[0].x, coo[0].y);
//     ctx.lineTo(coo[1].x, coo[1].y);
//     ctx.lineTo(coo[2].x, coo[2].y);
//     ctx.lineTo(coo[3].x, coo[3].y);
//     ctx.closePath();
//     ctx.fill();
// }

// function torad(a) {
//     return a * (Math.PI / 180)
// }

// function todeg(a) {
//     return a * (180 / Math.PI)
// }

// function getdistance(x1, y1, x2, y2) {
//     return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
// }

// function getangle(x1, y1, x2, y2) {
//     return -Math.atan2(x2 - x1, y2 - y1) + 1.5707963267948966; // radians (to deg = a * 180 / Math.PI;
// }

// function getpoint(x, y, l, a) {
//     var px = x + l * Math.cos(a);
//     var py = y + l * Math.sin(a);
//     return { "x": px, "y": py };
// }

// function clear() { // clear canvas function
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
// }

// function rgbToHsl(r, g, b) {
//     r /= 255, g /= 255, b /= 255;
//     var max = Math.max(r, g, b),
//         min = Math.min(r, g, b);
//     var h, s, l = (max + min) / 2;
//     if (max == min) {
//         h = s = 0; // achromatic
//     } else {
//         var d = max - min;
//         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//         switch (max) {
//             case r:
//                 h = (g - b) / d + (g < b ? 6 : 0);
//                 break;
//             case g:
//                 h = (b - r) / d + 2;
//                 break;
//             case b:
//                 h = (r - g) / d + 4;
//                 break;
//         }
//         h /= 6;
//     }
//     return ({ h: h, s: s, l: l });
// }

// function hslToRgb(h, s, l) {
//     var r, g, b;
//     if (s == 0) {
//         r = g = b = l; // achromatic
//     } else {
//         function hue2rgb(p, q, t) {
//             if (t < 0) t += 1;
//             if (t > 1) t -= 1;
//             if (t < 1 / 6) return p + (q - p) * 6 * t;
//             if (t < 1 / 2) return q;
//             if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//             return p;
//         }
//         var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//         var p = 2 * l - q;
//         r = hue2rgb(p, q, h + 1 / 3);
//         g = hue2rgb(p, q, h);
//         b = hue2rgb(p, q, h - 1 / 3);
//     }
//     return ({
//         r: Math.round(r * 255),
//         g: Math.round(g * 255),
//         b: Math.round(b * 255),
//     });
// }

// function drawscene() { // main drawScene function
//     if (renderme) {
//         clear(); // clear canvas
//         for (var i = 0; i < data.length; i++) {
//             var shp = data[i];
//             drawshape(shp);
//             if (shp[4].h > -1) shp[4].h -= 0.002;
//             else shp[4].h = 0;
//         }
//     }
// }