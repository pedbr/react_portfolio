import React from "react"

const WorkCard = (props) => {
    let work = props.work
    return (

        <div key={work.id}>
            <img src={work.image} className="block h-auto w-full" style={{ height: '300px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '100px' }} >
                <div style={projectTitle} className="font-bold text-xl mb-2">{work.date} | {work.name} .</div>
                <p>{work.company}</p>
                <p>{work.location}</p>
                <p className="text-black text-base">
                    {work.description}
                </p>
                <p>_________________________________________</p>
            </div>
        </div>
    )
}

const detailsBtn = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
}

const projectTitle = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
}

export default WorkCard