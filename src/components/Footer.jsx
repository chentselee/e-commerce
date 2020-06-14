import React from "react";
import "./Footer.css";

const FooterSection = ({ title, titleURL = "", links }) => {
  return (
    <section className="__footer-section">
      <a href={titleURL} className="__footer-section-title">
        {title}
      </a>
      <ul className="__footer-section-links">
        {links.map((link) => (
          <li key={link.name} className="__footer-section-link-item">
            <a href={link.URL} className="__footer-section-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="__footer">
      <FooterSection
        title="links1"
        links={[
          { name: "link1", URL: "#!" },
          { name: "link2", URL: "#!" },
          { name: "link3", URL: "#!" },
        ]}
      />
      <FooterSection
        title="links2"
        links={[
          { name: "link1", URL: "#!" },
          { name: "link2", URL: "#!" },
          { name: "link3", URL: "#!" },
        ]}
      />
      <FooterSection
        title="links3"
        links={[
          { name: "link1", URL: "#!" },
          { name: "link2", URL: "#!" },
          { name: "link3", URL: "#!" },
        ]}
      />
      <FooterSection
        title="links4"
        links={[
          { name: "link1", URL: "#!" },
          { name: "link2", URL: "#!" },
          { name: "link3", URL: "#!" },
        ]}
      />
      <p className="__footer-copyright">copyright infos</p>
    </footer>
  );
};

export default Footer;
