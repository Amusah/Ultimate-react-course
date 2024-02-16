import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skillName: "HTML+CSS",
    level: "advanced",
    color: "#9F70FD",
  },
  {
    skillName: "JavaScript",
    level: "advanced",
    color: "#EFF396",
  },
  {
    skillName: "SCSS",
    level: "intermediate",
    color: "#FFD0EC",
  },
  {
    skillName: "Git and GitHub",
    level: "intermediate",
    color: "#EEEDEB",
  },
  {
    skillName: "React",
    level: "beginner",
    color: "#7BD3EA",
  },
];

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
        {skills.map(skill => <SkillSet skillObj={skill} key={skill.skillName} />)}
      </div>

      {/* <div className="skills">
        <SkillSet skillName="HTML+CSS" emoji="💪" bg="#9F70FD" />
        <SkillSet skillName="JavaScript" emoji="💪" bg="#EFF396" />
      </div>
      <div className="skills">
        <SkillSet skillName="SCSS" emoji="💓" bg="#FFD0EC" />
        <SkillSet skillName="Git and GitHub" emoji="👍" bg="#EEEDEB" />
      </div>
      <div className="skills">
        <SkillSet skillName="React" emoji="💪" bg="#7BD3EA" />
      </div> */}
    </div>
  );
}

function SkillSet({skillObj}) {
  console.log(skillObj)
  return (
    <span style={{ backgroundColor: skillObj.color }} className="skill-badge">
      {skillObj.skillName}
      {skillObj.level === "beginner" && " 👶"}
      {skillObj.level === "intermediate" && " 👍"}
      {skillObj.level === "advanced" && " 💪"}
    </span>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
