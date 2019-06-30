import React from "react"

const WorkCard = (props) => {
    let work = props.work
    return (

        <div key={work.id}>
            <img src={work.image} className="block h-auto w-full" style={{ height: '300px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '100px' }} >
                <div style={projectTitle} className="font-bold text-xl mb-2">{work.date} | {work.name} .</div>
                <p style={companyStyle}>{work.company}</p>
                <p style={locationStyle}>{work.location}</p>
                <p style={descriptionStyle} className="text-black text-base">
                    {work.description}
                </p>
                <p style={divisorStyle}>_________________________________________</p>
            </div>
        </div>
    )
}

const companyStyle = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '10px',
}

const locationStyle = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
    marginBottom: '5px',
}

const projectTitle = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
}

const descriptionStyle = {
    fontFamily: 'karla',
    
}

const divisorStyle = {
    marginBottom: '50px',
    
}

export default WorkCard