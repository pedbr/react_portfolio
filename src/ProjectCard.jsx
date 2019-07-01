import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id}>
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div style={projectTitle} className="font-bold text-xl mb-2">{project.name} .</div>
                <p className="text-black text-base">
                    {project.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.website} target="_blank" style={detailsBtn} className="bg-black text-yellow hover:bg-grey-darkest text-xs py-1 px-2">
                    Details .
                </a>
            </div>

        </div>
    )
}

const detailsBtn = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    textDecoration: 'none'
}

const projectTitle = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
}

export default ProjectCard
