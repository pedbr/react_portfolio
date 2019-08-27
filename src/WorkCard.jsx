import React from "react";

const WorkCard = props => {
  let work = props.work;
  return (
    <div key={work.id}>
      <img src={work.image} className="" />

      <div className="">
        <div className="">
          {work.date} | {work.name} .
        </div>
        <p>{work.company}</p>
        <p>{work.location}</p>
        <p className="">{work.description}</p>
        <p>_________________________________________</p>
      </div>
    </div>
  );
};

export default WorkCard;
