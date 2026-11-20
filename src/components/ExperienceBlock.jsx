import React from "react";
export default function ExperienceBlock({experience}) {
  return <article className="experience">
    <small>{experience.period}</small>
    <h3>{experience.role}</h3>
    <div className="company">{experience.company}<span>|</span>{experience.location}</div>
    <p>{experience.description}</p>
    {experience.groups ? experience.groups.map(g=><div className="experience-group" key={g.title}>
      <h4>{g.title}</h4><ul>{g.items.map(x=><li key={x}>{x}</li>)}</ul>
    </div>) : <ul>{experience.items.map(x=><li key={x}>{x}</li>)}</ul>}
  </article>;
}
