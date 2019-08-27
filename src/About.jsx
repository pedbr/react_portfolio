import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src="./src/data/images/pedro.png" alt="Profile Picture" />
        </div>
        <div className="">
          <h1 className="">about me .</h1>
          <p className="">
            Hej! I'm Pedro, a 29 years old portuguese citizen based in
            Stockholm, Sweden. I have an academic background in Multimedia
            Design, and throughout my work life I had the pleasure of working in
            many different contexts. In my home country Portugal I worked as a
            Graphic Designer, Animator, Advertisement Content Creator and Web
            Designer. After deciding to expand my horizons I moved to Barcelona,
            Spain. Here I worked with customer service in the Travel Business,
            building my way up to a Corporate Trainer position. That position
            got me an opportunity to move and work in Stockholm, Sweden. After a
            year in the cold north I felt the need to get back to the creative
            fields. This time I decided to explore one of my biggest passions:
            coding. I applied for a 12 Week Full Stack Development Coding
            bootcamp, and am now starting my career as a Junior Software
            Developer! If you want to get in contact, just hit the button!{" "}
          </p>
          <a href="mailto:pedro.c.bras@gmail.com" target="_blank" className="">
            Contact .
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
