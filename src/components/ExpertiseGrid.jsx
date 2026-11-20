import React from "react";
export default function ExpertiseGrid({expertise}) {
  return <div className="expertise-grid">
    {Object.entries(expertise).map(([title,items])=><div className="expertise-block" key={title}>
      <h3>{title}</h3><div>{items.map((x,i)=><span key={x}>{x}{i<items.length-1?" · ":""}</span>)}</div>
    </div>)}
  </div>;
}
