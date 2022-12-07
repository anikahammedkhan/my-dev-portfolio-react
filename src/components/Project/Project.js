import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, picture, name, about, stack } = project;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img className='object-fit w-full' src={picture} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{stack}</div>
                </h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link className='btn btn-info text-white hover:btn-success hover:text-white'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;