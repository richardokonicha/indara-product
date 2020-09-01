import React, { Component } from "react";

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

class Graphic extends React.Component {
  constructor(props) {
    super(props);
    this.paint = this.paint.bind(this);
    this.state = {
      circles: [],
    };
    //
  }

  componentDidUpdate() {
    this.paint();
  }

  random = () => (max = 1, min = 0) => Math.random() * (max - min) + min;

  createCircles = () => {
    for (let i = 0; i < 400; i++) {
      let color = "hsl(" + this.random(220, 180) + ", 100%, 50%)";
      let angle = this.random(Math.PI * 2);
      let rad = this.random(1.5, 1);
      let radX = this.random(40, 30);
      let radY = this.random(130, 120);
      let a = null;
      let speed = 0.01;
      this.setState({
        circles: [
          ...this.state.circles,
          new Circle(color, angle, rad, radX, radY, a, false, speed),
        ],
      });
      // circles.push(new Circle(color, angle, rad, radX, radY, a, false, speed));
    }
    for (let i = 0; i < 250; i++) {
      let color = "hsl(" + this.random(220, 180) + ", 100%, 50%)";
      let angle = this.random(Math.PI * 2);
      let rad = this.random(1, 0.5);
      let radX = this.random(25, 0);
      let radY = this.random(25, 0);
      let a = null;
      circles.push(new Circle(color, angle, rad, radX, radY, a, false));
    }
    for (let i = 0; i < 800; i++) {
      let color = "hsl(" + this.random(220, 180) + ", 100%, 50%)";
      let angle = this.random(Math.PI * 2);
      let rad = this.random(1.5, 0.5);
      let radX = this.random(40, 30);
      let radY = this.random(120, 110);
      let a = i % 2 === 0 ? 2 : -2;
      circles.push(new Circle(color, angle, rad, radX, radY, a, true));
    }
  };

  paint() {
    const { width, height, rotation } = this.props;
    const context = this.refs.canvas.getContext("2d");

    this.createCircles();
    requestAnimationFrame(animate);

    // context.clearRect(0, 0, width, height);
    // context.save();
    // context.translate(100, 100);
    // context.rotate(rotation, 100, 100);
    // context.fillStyle = "#FF0";
    // context.fillRect(-50, -50, 100, 100);
    // context.restore();
  }
  // attempt to draw react

  render() {
    const { width, height } = this.props;
    return <canvas ref="canvas" width={width} height={height} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  tick() {
    const rotation = this.state.rotation + 0.0;
    this.setState({ rotation });
    requestAnimationFrame(this.tick);
  }

  render() {
    return <Graphic rotation={this.state.rotation} width={200} height={200} />;
  }
}

export default App;
// ReactDOM.render(<App />, document.body);

//MDN requestAnimationFrame
// var start = null;
// var element = document.getElementById("SomeElementYouWantToAnimate");
// element.style.position = "absolute";

// function step(t) {
//   if (!start) start = t;
//   var maxt = 2000; // length of animation
//   var dx = 1000; // change of animation
//   var dt = (t - start) / maxt; //fraction < 1
//   element.style.left = Math.min(dt * dx, 200) + "px";
//   if (dt < 1) window.requestAnimationFrame(step);
// }

// window.requestAnimationFrame(step);
