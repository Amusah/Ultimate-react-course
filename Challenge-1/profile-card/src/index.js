import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <CardHead imgSrc="img/pic.jpeg" />
      <CardBody />
    </div>
  );
}

function CardHead(props) {
  return <img className="profile" src={props.imgSrc} alt="profile picture" />;
}

function CardBody() {
  return (
    <div className="card-body">
      <Intro />
      <div className="skills">
        <SkillSet skillName="HTML+CSS" emoji="💪" bg="#9F70FD" />
        <SkillSet skillName="JavaScript" emoji="💪" bg="#EFF396" />
      </div>
      <div className="skills">
        <SkillSet skillName="SCSS" emoji="💓" bg="#FFD0EC" />
        <SkillSet skillName="Git and GitHub" emoji="👍" bg="#EEEDEB" />
      </div>
      <div className="skills">
        <SkillSet skillName="React" emoji="💪" bg="#7BD3EA" />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2 className="name">Henry Amusah</h2>
      <div className="bio">
        Self-taught web dev, CS grad, ex-automobile mechanic and Rc
        airplane hobbyist. I like to play the piano on zero days.
      </div>
    </div>
  );
}

function SkillSet(props) {
  return (
    <span style={{backgroundColor: props.bg}} className="skill-badge">
      {props.skillName} {props.emoji}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
