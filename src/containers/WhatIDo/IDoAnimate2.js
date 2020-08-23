import React, { Component } from "react";

const random = (max = 1, min = 0) => Math.random() * (max - min) + min;

const util = {
  drawCircle(x, y, r, c, a, context, W, H) {
    context.beginPath();
    context.fillStyle = c;
    context.arc(x + W / 2, y + H / 2, r, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  },
  drawCircleRotate(x, y, r, c, a, context, W, H) {
    context.beginPath();
    context.save();
    context.fillStyle = c;
    context.translate(x + W / 2, y + H / 2);
    context.rotate(a);
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.restore();
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
  draw(context, W, H) {
    this.rotate
      ? util.drawCircleRotate(
          this.x,
          this.y,
          this.rad,
          this.color,
          this.a,
          context,
          W,
          H
        )
      : util.drawCircle(
          this.x,
          this.y,
          this.rad,
          this.color,
          this.a,
          context,
          W,
          H
        );
  }
  update(context, W, H) {
    this.angle += 0.007;
    this.x = this.radX * Math.cos(this.angle);
    this.y = this.radY * Math.sin(this.angle);
    this.draw(context, W, H);
  }
}

class IDoAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = { testVarible: "this is a test", circles: [], ctx: Object };
    this.canvasRef = React.createRef();
  }

  addCircle = (newC) => {
    this.setState((state) => ({
      circles: [...state.circles, newC],
    }));
  };

  ctxCreate = () => {
    const canvas = this.canvasRef.current;
    this.setState((state) => ({
      context: canvas.getContext("2d"),
    }));
  };

  createCircles = () => {
    let speed = 0.06;

    for (let i = 0; i < 400; i++) {
      let color = "hsl(" + random(220, 180) + ", 100%, 50%)";
      let angle = random(Math.PI * 2);
      let rad = random(1.5, 1);
      let radX = random(40, 30);
      let radY = random(130, 120);
      let a = null;
      //   let speed = 0.01;

      let newCircle = new Circle(
        color,
        angle,
        rad,
        radX,
        radY,
        a,
        false,
        speed
      );
      this.addCircle(newCircle);
    }
    for (let i = 0; i < 250; i++) {
      let color = "hsl(" + random(220, 180) + ", 100%, 50%)";
      let angle = random(Math.PI * 2);
      let rad = random(1, 0.5);
      let radX = random(25, 0);
      let radY = random(25, 0);
      let a = null;

      let newCircle = new Circle(
        color,
        angle,
        rad,
        radX,
        radY,
        a,
        false,
        speed
      );
      this.addCircle(newCircle);
    }
    for (let i = 0; i < 800; i++) {
      let color = "hsl(" + random(220, 180) + ", 100%, 0%)";
      let angle = random(Math.PI * 2);
      let rad = random(1.5, 0.5);
      let radX = random(40, 30);
      let radY = random(120, 110);
      let a = i % 2 === 0 ? 2 : -2;
      let newCircle = new Circle(
        color,
        angle,
        rad,
        radX,
        radY,
        a,
        false,
        speed
      );
      this.addCircle(newCircle);
      //   circles.push(new Circle(color, angle, rad, radX, radY, a, true));
    }
  };

  animate = () => {
    const canvas = this.canvasRef.current;
    let W = canvas.width;
    let H = canvas.height;
    // const context = canvas.getContext("2d");
    let context = this.state.context;

    context.clearRect(0, 0, W, H);
    this.state.circles.forEach((x) => x.update(context, W, H));
    // textReact();
    requestAnimationFrame(this.animate);
  };

  componentDidMount() {
    const canvas = this.canvasRef.current;
    // const context = canvas.getContext("2d");
    this.ctxCreate();

    // context.fillStyle = "rgba(0, 0, 200, 0.5)";
    // context.fillRect(0, 0, canvas.width, canvas.height);

    // context.fillStyle = "rgba(0, 200, 200, 0.5)";
    // context.fillRect(130, 0, 200, 100);

    // context.fillStyle = "rgba(200, 0, 200, 0.5)";
    // context.fillRect(-50, 60, 220, 100);
    // this.onMove();

    this.createCircles();

    requestAnimationFrame(this.animate);
  }

  render() {
    // console.log(this.state.circles, "about to for retur");

    // console.log("llllllllltttlll", this.state.circles);
    return (
      <div>
        <canvas ref={this.canvasRef}></canvas>
      </div>
    );
  }
}

export default IDoAnimate;
