import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum eum veritatis eveniet esse? Officia, numquam quia sed molestias repudiandae sint eligendi unde delectus assumenda ducimus quisquam tenetur animi recusandae.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Annelisa Moody</div>
                    <div>18 Dec, 11:30pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
