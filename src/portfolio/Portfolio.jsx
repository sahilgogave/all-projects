import React from "react";
import PortfolioData from "./PortfolioData";
import "./portfolio.css";

const Portfolio = () => {
  //theme changer
  const ChangeThemeToDark = () => {
    document.documentElement.style.setProperty("--body-color", "#080705");
    document.documentElement.style.setProperty("--container-color", "#212529");
    document.documentElement.style.setProperty("--title-color", "#fff");
    document.documentElement.style.setProperty("--title-color-dark", "#F8F9FA");
    document.documentElement.style.setProperty("--text-color", "#E9ECEF");
    document.documentElement.style.setProperty(
      "--light-mode-shadow",
      "#d6dee4"
    );
  };
  // --title-color: hsl(var(--hue), var(--sat), 20%);
  // --title-color-dark: hsl(var(--hue), var(--sat), 0%);
  // --text-color: hsl(var(--hue), var(--sat), 46%);
  // --body-color: hsl(var(--hue), var(--sat), 98%);
  // --container-color: #fff;
  // --light-mode-shadow:#6C757D;
  const ChangeThemeToLight = () => {
    document.documentElement.style.setProperty(
      "--body-color",
      "hsl(var(--hue), var(--sat), 98%)"
    );
    document.documentElement.style.setProperty("--container-color", "#fff");
    document.documentElement.style.setProperty(
      "--title-color",
      "hsl(var(--hue), var(--sat), 20%)"
    );
    document.documentElement.style.setProperty(
      "--title-color-dark",
      "hsl(var(--hue), var(--sat), 0%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      "hsl(var(--hue), var(--sat), 46%)"
    );
    document.documentElement.style.setProperty(
      "--light-mode-shadow",
      "#6C757D"
    );
  };
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Portfolio</span>

      <div className="portfolio__container container grid">
        {PortfolioData.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" className="project__img" />
              </div>
              <h3>{title}</h3>
              <span className="portfolio__subtitle">{desc}</span>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="button button--flex"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="button button--flex btn-primary"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
