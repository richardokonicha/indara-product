import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Projects.scss";
import { folioProjects } from "../../porfolio";

export default function SectionOne() {
  return (
    <section id="sectionOne" className="wrapper">
      <div className="SectionOne__container">
        <div className="project_title-div">
          <h2 className="project_title">{folioProjects.title}</h2>
          <p className="">{folioProjects.subtitle}</p>
        </div>

        {/* grid starts here */}
        <div className="SectionOne__grid">
          {folioProjects.projects.map((project) => {
            return (
              <div className="SectionOne__grid__item">
                <article className={project.class}>
                  <img
                    className="SectionOne__ImageIss"
                    src={project.image}
                    alt={project.alt}
                    srcset=""
                  />
                </article>
              </div>
            );
          })}
          {/*  */}
        </div>
      </div>
    </section>
  );
}
