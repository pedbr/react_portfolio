import React from "react"


const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div style={profilePic} className="w-full lg:w-1/4 md:w-1/2">
                <img src="./src/data/images/pedro.png" alt="Profile Picture" />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 style={aboutTitle} className="content-text">about me .</h1>
                    <p style={aboutText} className="content-text">Hej! I'm Pedro, a 29 years old portuguese citizen based in Stockholm, Sweden. I have an academic background in Multimedia Design, and throghout my work life I had the pleasure of working in many different contexts. In my home country Portugal I worked as a Graphic Designer, Animator, Advertisement Content Creator and Web Designer. After deciding to expand my horizons I moved to Barcelona, Spain. Here I worked with customer service in the Travel Business, building my way up to a Corporate Trainer position. That position got me an oportunity to move and work in Stockholm, Sweden. After a year in the cold north I felt the need to get back to the creative fields. This time I decided to explore one of my biggest passions: coding. I applied for a 12 Week Full Stack Development Coding bootcamp, and am now starting my carrer as a Junior Software Developer! If you want to get in contact, just hit the button! </p>
                    <button style={detailsBtn} className="bg-black text-yellow hover:bg-grey-darkest text-xs py-1 px-2">
                    Contact .
                </button>
                </div>
                
            </div>
        </div>
    )
    
}

const detailsBtn = {
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    marginLeft: '20px',
    marginTop: '20px'
}

const aboutTitle = {
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '144px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

const aboutText = {
    paddingLeft: '20px',
    paddingTop: '40px',
    paddingRight: '200px',
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#000000',
    
}

const profilePic = {
    padding: '40px',
}

export default About