// Created by aldy

"use strict";

var W, H, c, ctx;
var circles = [];

const random = (max = 1, min = 0) => Math.random() * (max - min) + min;

const util = {
  drawCircle(x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x + W / 2, y + H / 2, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  },
  drawCircleRotate(x, y, r, c, a) {
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle = c;
    ctx.translate(x + W / 2, y + H / 2);
    ctx.rotate(a);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  },
};

class Circle {
  constructor(color, angle, rad, radX, radY, a, rotate, speed) {
    this.color = color;
    this.angle = angle;
    this.rad = rad;
    this.radY = radX; //i know :)
    this.radX = radY;
    this.a = a;
    this.rotate = rotate;
  }
  draw() {
    this.rotate
      ? util.drawCircleRotate(this.x, this.y, this.rad, this.color, this.a)
      : util.drawCircle(this.x, this.y, this.rad, this.color, this.a);
  }
  update() {
    this.angle += 0.007;
    this.x = this.radX * Math.cos(this.angle);
    this.y = this.radY * Math.sin(this.angle);
    this.draw();
  }
}

const createCircles = () => {
  for (let i = 0; i < 400; i++) {
    let color = "hsl(" + random(220, 180) + ", 100%, 50%)";
    let angle = random(Math.PI * 2);
    let rad = random(1.5, 1);
    let radX = random(40, 30);
    let radY = random(130, 120);
    let a = null;
    let speed = 0.01;
    circles.push(new Circle(color, angle, rad, radX, radY, a, false, speed));
  }
  for (let i = 0; i < 250; i++) {
    let color = "hsl(" + random(220, 180) + ", 100%, 50%)";
    let angle = random(Math.PI * 2);
    let rad = random(1, 0.5);
    let radX = random(25, 0);
    let radY = random(25, 0);
    let a = null;
    circles.push(new Circle(color, angle, rad, radX, radY, a, false));
  }
  for (let i = 0; i < 800; i++) {
    let color = "hsl(" + random(220, 180) + ", 100%, 50%)";
    let angle = random(Math.PI * 2);
    let rad = random(1.5, 0.5);
    let radX = random(40, 30);
    let radY = random(120, 110);
    let a = i % 2 === 0 ? 2 : -2;
    circles.push(new Circle(color, angle, rad, radX, radY, a, true));
  }
};

const textReact = () => {
  ctx.beginPath();
  ctx.fillStyle = "hsl(200, 100%, 50%)";
  ctx.font = "50px Arial";
  ctx.fillText("React", W / 2, H / 2 + 170);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.closePath();
};

const animate = () => {
  ctx.clearRect(0, 0, W, H);
  circles.forEach((x) => x.update());
  textReact();
  requestAnimationFrame(animate);
};

const init = () => {
  c = document.getElementById("canvas");

  c.width = W = window.innerWidth;
  c.height = H = window.innerHeight;
  ctx = c.getContext("2d");
  createCircles();
  requestAnimationFrame(animate);
};

onload = init;
