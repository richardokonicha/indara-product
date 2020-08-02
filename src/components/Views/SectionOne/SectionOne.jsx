import React, { Component } from "react";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <section id="sectionOne" className="wrapper">
      <div className="SectionOne__container">
        <div className="SectionOne__grid">
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--french-gray">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--vanilla-ice">
              {/* <h1 className="pantone-card__name">

              </h1> */}
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/v1596406145/ISS_yxxr05.png"
                alt=""
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--mischka">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--givry">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--bon-jour">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>

          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--jagged-ice">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--shadow-green">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          {/* <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--conch">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--gray-nurse">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--pampas">
              <h1 className="pantone-card__name">this is the beginning</h1>
            </article>
          </div> */}
        </div>
      </div>
    </section>
  );
}
