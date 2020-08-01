import React from "react";
import "./style.css";
import "./Full.css";
import "./Port.css";
import "./shooting.css";

export default function Meet() {
  return (
    <c-wiz view>
      <div className="Port-main" jsname="a9kxte">
        <div className="Heigh" />
        <div className="Port-main__scaler">
          <div className="Port-main__container">
            <div className="Port-main__container_text">
              <div className="Port-main__container_textH1">
                Premium video meetings. <br></br>Now free for everyone.
              </div>
              <div className="Port-main__container_textP1">
                We re-engineered the service we built for secure business
                meetings, Google Meet, to make it free and available for all.
              </div>
              <div className="Port-main__container_btninput">
                <button
                  className="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe cjtUbb Dg7t5c"
                  autofocus="autofocus"
                >
                  <div className="VfPpkd-Jh9lGc" />
                  <i
                    className="google-material-icons VfPpkd-kBDsod"
                    aria-hidden="true"
                  >
                    video_call
                  </i>
                  <span jsname="V67aGc" className="VfPpkd-vQzf8d">
                    New meeting
                  </span>
                  <div className="VfPpkd-RLmnJb" />
                </button>

                <div className="KOM0mb">
                  <div className="Ufn6O FN9m1d AmoCp">
                    <label className="VfPpkd-fmcmS-yrriRe VfPpkd-fmcmS-yrriRe-OWXEXe-mWPk3d VfPpkd-ksKsZd-mWPk3d VfPpkd-fmcmS-yrriRe-OWXEXe-di8rgd-V67aGc VfPpkd-fmcmS-yrriRe-OWXEXe-INsAgc VfPpkd-fmcmS-yrriRe-OWXEXe-SfQLQb-M1Soyc-Bz112c cfWmIb orScbe XfeBDf h7XSnb">
                      <i
                        className="material-icons-extended VfPpkd-fmcmS-TvZj5c VfPpkd-fmcmS-TvZj5c-OWXEXe-M1Soyc"
                        aria-hidden="true"
                      >
                        keyboard
                      </i>
                      <input
                        type="text"
                        defaultValue
                        autoComplete="chr-off"
                        id="i2"
                        className="VfPpkd-fmcmS-wGMbrd B5oKfd"
                        aria-controls="i3"
                        aria-describedby="i3"
                        placeholder="Enter a code or link"
                        spellCheck="false"
                        maxLength={50}
                      ></input>
                      <span className="VfPpkd-NSFCdd-i5vt6e VfPpkd-NSFCdd-i5vt6e-OWXEXe-di8rgd-V67aGc">
                        <span className="VfPpkd-NSFCdd-Brv4Fb"> </span>
                        <span className="VfPpkd-NSFCdd-MpmGFe"></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="Port-line"></div>
              <div className="Port-main__container_link">
                <span className="Port_Pointer">
                  <a
                    href="https://meet.google.com/about/redirect/landing-learn-more/?hl=en"
                    target="_blank"
                    rel="noopener"
                    className="Port-alink"
                  >
                    Learn more
                  </a>
                  about Google Meet
                </span>
              </div>
            </div>
            <div className="C9bDzc">
              <div className="LSNDte VdLOD yUoCvf fXx9Lc SL65ee">
                <img
                  className="se63he"
                  src="//www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
                  alt="Image of people in a meeting on Google Meet"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
      <canvas id="reveal-effect"></canvas>
    </c-wiz>
  );
}

let renderer, scene, camera, cameraCtrl;
let width, height, cx, cy, wWidth, wHeight;
const TMath = THREE.Math;

let conf = {
  color: 0xffffff,
  objectWidth: 12,
  objectThickness: 3,
  ambientColor: 0x808080,
  light1Color: 0xffffff,
  shadow: false,
  perspective: 75,
  cameraZ: 75,
};

let objects = [];
let geometry, material;
let hMap, hMap0, nx, ny;

init();

function init() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("reveal-effect"),
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    conf.perspective,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = conf.cameraZ;

  scene = new THREE.Scene();
  geometry = new THREE.BoxGeometry(
    conf.objectWidth,
    conf.objectWidth,
    conf.objectThickness
  );

  window.addEventListener("load", initScene);
  document.getElementById("trigger").addEventListener("click", initScene);

  animate();
}

function initScene() {
  onResize();
  scene = new THREE.Scene();
  initLights();
  initObjects();
}

function initLights() {
  scene.add(new THREE.AmbientLight(conf.ambientColor));
  let light = new THREE.PointLight(0xffffff);
  light.position.z = 100;
  scene.add(light);
}

function initObjects() {
  objects = [];
  nx = Math.round(wWidth / conf.objectWidth) + 1;
  ny = Math.round(wHeight / conf.objectWidth) + 1;
  let mesh, x, y;
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      material = new THREE.MeshLambertMaterial({
        color: conf.color,
        transparent: true,
        opacity: 1,
      });
      mesh = new THREE.Mesh(geometry, material);
      x = -wWidth / 2 + i * conf.objectWidth;
      y = -wHeight / 2 + j * conf.objectWidth;
      mesh.position.set(x, y, 0);
      objects.push(mesh);
      scene.add(mesh);
    }
  }
  document.body.classList.add("loaded");
  startAnim();
}

function startAnim() {
  document.body.classList.remove("revealed");
  objects.forEach((mesh) => {
    mesh.rotation.set(0, 0, 0);
    mesh.material.opacity = 1;
    mesh.position.z = 0;
    let delay = TMath.randFloat(1, 2);
    let rx = TMath.randFloatSpread(2 * Math.PI);
    let ry = TMath.randFloatSpread(2 * Math.PI);
    let rz = TMath.randFloatSpread(2 * Math.PI);
    TweenMax.to(mesh.rotation, 2, { x: rx, y: ry, z: rz, delay: delay });
    TweenMax.to(mesh.position, 2, {
      z: 80,
      delay: delay + 0.5,
      ease: Power1.easeOut,
    });
    TweenMax.to(mesh.material, 2, { opacity: 0, delay: delay + 0.5 });
  });
  setTimeout(() => {
    document.body.classList.add("revealed");
  }, 4500);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onResize() {
  width = window.innerWidth;
  cx = width / 2;
  height = window.innerHeight;
  cy = height / 2;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);

  size = getRendererSize();
  wWidth = size[0];
  wHeight = size[1];
}

function getRendererSize() {
  const cam = new THREE.PerspectiveCamera(conf.perspective, camera.aspect);
  const vFOV = (cam.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
  const width = height * cam.aspect;
  return [width, height];
}
