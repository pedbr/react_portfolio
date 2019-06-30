import React, { Component } from "react"
import axios from "axios"
import WorkCard from "./WorkCard"

class Work extends Component {
    constructor() {
        super();
        this.state = {
            works: []
        };
    }
    componentDidMount() {
        axios.get('./src/data/works.json')
            .then(response => {
                this.setState({
                    works: response.data
                })
            })
    }

    render() {
        const works = this.state.works
        let worksList 

        if (works.length > 0) {
            worksList = works.map(work => {
                return (
                    <div key={work.id} className="min-h-1200 w-full">
                        <WorkCard work={work} />
                    </div>
                )
            })
        }


        return (
            <div className="content-wrapper">
    
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {worksList}
                </div>
            </div>
        )
    
    }
};

export default Work