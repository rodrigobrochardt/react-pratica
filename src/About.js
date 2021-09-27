import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="aboutme" className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-info">
        <section className="about-img">
          <img src="https://www.howitworksdaily.com/wp-content/uploads/2015/08/131216Cute-dog-sticking-out-his-tongue-wallpaper-200x200.jpg" />
        </section>
        <section className="about-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            vestibulum elit. Pellentesque velit odio, maximus eu convallis sed,
            viverra ac diam. Curabitur ornare pellentesque libero, eu commodo
            turpis. Cras id rutrum ante. Ut et justo eleifend, pretium nibh non,
            luctus eros. Aenean luctus lorem at lorem dapibus dictum. In id
            molestie libero. Curabitur tempus vel lectus ac luctus. Maecenas
            placerat vehicula mi sed porttitor. Donec eu ante est. Nulla
            hendrerit, nisi non consequat accumsan, libero dui commodo justo,
            vel dapibus eros dolor vel odio. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin ipsum
            ante, faucibus et mattis eu, consequat condimentum lacus. Curabitur
            eu ipsum sit amet metus rutrum porta et a est.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
