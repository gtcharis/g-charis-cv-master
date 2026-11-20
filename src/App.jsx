import React from "react";
import { cv } from "./data/cvData.js";
import Sidebar from "./components/Sidebar.jsx";
import Section from "./components/Section.jsx";
import ExperienceBlock from "./components/ExperienceBlock.jsx";
import ExpertiseGrid from "./components/ExpertiseGrid.jsx";
import Footer from "./components/Footer.jsx";

function Hero() {
  return <header className="hero">
    <div className="kicker">MASTER CURRICULUM VITAE</div>
    <div className="hero-first">{cv.firstName}</div>
    <div className="hero-last">{cv.lastName}</div>
    <div className="hero-role">SOFTWARE ENGINEERING <span>•</span> DATA SCIENCE <span>•</span> APPLIED AI</div>
    <div className="hero-desc">Solutions Architecture · Technology & Product Leadership · Enterprise Systems</div>
  </header>;
}
function Page({ number, children, hero = false }) {
  return <div className="page">
    <Sidebar page={number} />
    <main className="main">
      {hero && <Hero />}
      {children}
      <Footer page={number} />
    </main>
  </div>;
}
function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-heading">
      <h3>{project.name}</h3>
      {project.status && <span className="status">{project.status}</span>}
    </div>
    {project.role && <div className="project-role">{project.role}</div>}
    <p>{project.description}</p>
    {project.skills && <div className="skill-line">{project.skills.join(" · ")}</div>}
    {project.tech && <small>{project.tech}</small>}
    {project.evidence && <div className="evidence">{project.evidence}</div>}
  </article>;
}
function EducationCard({ item }) {
  return <article className="education-card">
    <div className="education-meta">{item.period}</div>
    <h3>{item.qualification}</h3>
    <div className="education-institution">{item.institution} · {item.location}</div>
    {item.result && <div className="education-result">{item.result}</div>}
    {item.groups?.map(group => <div className="subject-group" key={group.title}>
      <strong>{group.title}</strong>
      <p>{(group.subjects || []).join(" · ")}</p>
    </div>)}
  </article>;
}
function PageOne() {
  return <Page number={1} hero>
    <Section title="Professional Profile">
      <div className="profile">{cv.profile.map((p,i)=><p key={i}>{p}</p>)}</div>
    </Section>
    <Section title="Professional Experience">
      <ExperienceBlock experience={cv.experience[0]} />
    </Section>
  </Page>;
}
function PageTwo() {
  return <Page number={2}>
    <Section title="Earlier Professional Experience">
      {cv.experience.slice(1).map((e,i)=><ExperienceBlock key={`${e.company}-${i}`} experience={e}/>) }
    </Section>
    <Section title="Teaching, Leadership & Mentorship">
      <ul className="teaching-list">{cv.teaching.items.map(x=><li key={x}>{x}</li>)}</ul>
    </Section>
    <Section title="Professional Competency Framework">
      <ExpertiseGrid expertise={Object.fromEntries(cv.pillars.map(([title,...items])=>[title,items]))}/>
    </Section>
  </Page>;
}
function PageThree() {
  return <Page number={3}>
    <Section title="Education & Academic Coursework">
      <div className="education-list">{cv.education.map((e,i)=><EducationCard key={`${e.qualification}-${i}`} item={e}/>)}</div>
      <p className="academic-note">Course titles are reproduced from academic progress records. Provisional marks are intentionally not displayed.</p>
    </Section>
    <Section title="Technical Skills & Technologies">
      <ExpertiseGrid expertise={cv.expertise}/>
    </Section>
  </Page>;
}
function ProjectPage({number,title,projects,grid=false,compact=false}) {
  return <Page number={number}><Section title={title}>
    <div className={`project-list${grid ? " project-grid" : ""}${compact ? " compact" : ""}`}>{projects.map(p=><ProjectCard key={p.name} project={p}/>)}</div>
  </Section></Page>;
}
function PageFive() {
  return <Page number={5}>
    <Section title="Research, Data Science & Artificial Intelligence">
      <div className="project-list project-grid compact">{cv.dataAiProjects.map(p=><ProjectCard key={p.name} project={p}/>)}</div>
    </Section>
    <Section title="Selected Applied Engineering Projects">
      <div className="project-list project-grid compact">{cv.engineeringProjects.slice(0,3).map(p=><ProjectCard key={p.name} project={p}/>)}</div>
    </Section>
  </Page>;
}
function PageSix() {
  return <Page number={6}>
    <Section title="Additional Software Engineering Projects">
      <div className="project-list project-grid compact">{cv.engineeringProjects.slice(3).map(p=><ProjectCard key={p.name} project={p}/>)}</div>
    </Section>
    <Section title="Professional Strengths">
      <ul className="teaching-list">{cv.strengths.map(x=><li key={x}>{x}</li>)}</ul>
    </Section>
    <Section title="Professional References"><p className="reference-note">Available upon request.</p></Section>
  </Page>;
}
export default function App() {
  return <>
    <button className="print-button" onClick={()=>window.print()}>Print / Save PDF</button>
    <div className="screen-note">GODFREY CHARIS · MASTER PROFESSIONAL RECORD · SIX-PAGE A4 LAYOUT</div>
    <div className="cv-document">
      <PageOne/><PageTwo/><PageThree/>
      <ProjectPage number={4} title="Products & Enterprise Systems" projects={cv.professionalProjects} grid compact/>
      <PageFive/><PageSix/>
    </div>
  </>;
}
