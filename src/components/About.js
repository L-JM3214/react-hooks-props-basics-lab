import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links githubUrl={props.links.github} linkedInUrl={props.links.linkedin} />
    </div>
  );
}
export default About;

