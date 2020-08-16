import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Projects.scss";
// import { projectLinks } from "../../portfolio";

export default function SectionOne() {
  return (
    <section id="sectionOne" className="wrapper">
      <div className="SectionOne__container">
        <div className="">
          <h2
            className="project_title fadeInDownCustom"
            style={{ visibility: "visible", animationName: "fadeInDownSmall" }}
          >
            See some of my projects
          </h2>
          <p
            className="text-center descr wow fadeInDownCustom animated"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInDownSmall",
            }}
          >
            Awesome illustrations for your next landing
          </p>
        </div>

        {/* grid starts here */}
        <div className="SectionOne__grid">
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--french-gray">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1596448204/ehealth_jmpust.png"
                alt="Ehealther"
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--vanilla-ice">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/v1596406145/ISS_yxxr05.png"
                alt="Integrated Supportive Supervision"
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--mischka">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1596449852/covidusapi_iunntg.png"
                alt="Covidus api"
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--givry">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1596446883/EngagementBot_aweafd.png"
                alt="Engagement PushBot"
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--bon-jour">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1596448204/ehealth_jmpust.png"
                alt="Ehealther"
                srcset=""
              />
            </article>
          </div>

          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--jagged-ice">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/v1596406144/openhisa_zxgisc.png"
                alt="OpenHisa"
                srcset=""
              />
            </article>
          </div>
          <div className="SectionOne__grid__item">
            <article className="pantone-card pantone-card--shadow-green">
              <img
                className="SectionOne__ImageIss"
                src="https://res.cloudinary.com/konichar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1596450154/api_orknnq.png"
                alt="Open api"
                srcset=""
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
