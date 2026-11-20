import React from "react";
import { cv } from "../data/cvData.js";
function SideSection({title,children}) {
  return <section className="side-section"><div className="side-rule"/><h3>{title}</h3><div className="side-content">{children}</div></section>;
}
export default function Sidebar({page}) {
  return <aside className="sidebar"><div className="sidebar-inner">
    <div className="initials">GC</div>
    <div className="side-name">{cv.name}</div>
    <div className="side-title">{cv.title}</div>
    <div className="side-title light">{cv.headline}</div>
    <SideSection title="Contact">
      <label>LOCATION</label><div>{cv.contact.location}</div>
      <label>EMAIL</label><div>{cv.contact.email}</div>
      <label>LINKEDIN</label><a href={cv.contact.linkedin}>{cv.contact.linkedinLabel}</a>
      <label>GITHUB</label><a href={cv.contact.github}>{cv.contact.githubLabel}</a>
    </SideSection>
    <SideSection title={page===1?"Core capabilities":"Professional pillars"}>
      {cv.sidebarCore.map(x=><div className="side-item" key={x}>{x}</div>)}
    </SideSection>
    {page===1 && <SideSection title="Leadership & delivery">
      {["Product ownership","CEO & Board engagement","Engineering direction","DevOps & production","Technology governance"].map(x=><div className="side-item" key={x}>{x}</div>)}
    </SideSection>}
    {page===3 && <SideSection title="Academic foundation">
      <b>BSc Computer Science</b><div>Wits · 2019–2021</div><br/>
      <b>BSc Honours Big Data Analytics</b><div>Wits · 2022–2023</div>
    </SideSection>}
    {page===4 && <SideSection title="Selected products">
      {["BasaApp 1.0 / 2.0","BasaAdmin V2","RideAlong","MyJobAgent","TimberPay","TimberBank","NGANO","HaulIt","Telememo","Faith's Boutique POS"].map(x=><div className="side-item" key={x}>{x}</div>)}
    </SideSection>}
    <div className="sidebar-tag">ENGINEER / LEAD / DELIVER</div>
  </div></aside>;
}
