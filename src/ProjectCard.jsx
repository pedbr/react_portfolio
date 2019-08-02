import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id}>
            <img src={project.image} className=""  />


            <div className=""  >
                <div className="">{project.name} .</div>
                <p className="">
                    {project.description}
                </p>
            </div>

            <div className="">
                <a href={project.website} target="_blank" className="">
                    Details .
                </a>
            </div>

        </div>
    )
}


export default ProjectCard
