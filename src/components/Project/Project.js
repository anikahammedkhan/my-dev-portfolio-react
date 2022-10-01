import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className='object-fit w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project.name}
                    <div className="badge badge-secondary">{project.stack}</div>
                </h2>
                <p>{project.about}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{project.liveLink}</div>
                    <div className="badge badge-outline">{project.repoLink}</div>
                </div>
            </div>
        </div>
    );
};

export default Project;