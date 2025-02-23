"use strict";
const { PI: π, E: e, sin, cos, pow, abs } = Math;
let c, ctx, W, H;
let paused = false, fc = 0, fid = 0;
let r = 0, θ = 0, scf = 30; // Scale factor
let x = 0, y = 0, tempx = 0, tempy = 0;

// Function to set canvas size dynamically
const setSize = (canvas, context) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return [canvas.width, canvas.height];
};

// Function to clear the canvas
const clear = (context) => {
    context.clearRect(0, 0, W, H);
};

// Function to draw a line
const line = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
};

// Setup function
const setup = () => {
    c = document.getElementById("canvas"); // Fixed ID case
    ctx = c.getContext("2d");
    [W, H] = setSize(c, ctx);
    
    window.onresize = () => [W, H] = setSize(c, ctx);

    document.getElementById("Info").onclick = () => alert(
        "Parametric Butterfly\n\nClick to pause/unpause, double-click to clear canvas"
    );

    c.onclick = () => {
        if (paused) {
            fid = window.requestAnimationFrame(animate);
        } else {
            window.cancelAnimationFrame(fid);
        }
        paused = !paused;
    };

    c.ondblclick = () => clear(ctx);

    window.requestAnimationFrame(animate);
};

// Animation function
const animate = () => {
    ctx.fillStyle = ctx.strokeStyle = `rgb(${abs(sin(fc / 360)) * 255}, ${abs(sin(fc / 360 - π / 6)) * 255}, ${abs(cos(fc / 360)) * 255})`;

    ctx.save();
    ctx.translate(W / 2, H / 2);

    tempx = x;
    tempy = y;

    r = pow(e, sin(θ)) - 2 * cos(4 * θ) + pow(sin((2 * θ - π) / 24), 5);
    r *= scf;
    
    x = r * cos(θ);
    y = -r * sin(θ);

    line(ctx, x, y, tempx, tempy);

    ctx.restore();

    θ = fc / 60;
    fc++;

    fid = window.requestAnimationFrame(animate);
};

window.onload = setup;
