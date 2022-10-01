import React from 'react';
import './TechStack.css';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/js-official-1.svg';
import bootstrap from '../../images/bootstrap.svg';
import tailwind from '../../images/tailwind.svg';
import react from '../../images/react.svg';
import node from '../../images/nodejs.svg';
import sass from '../../images/sass.svg';
import mongodb from '../../images/mongodb.svg';
import firebase from '../../images/firebase.svg';
import heroku from '../../images/heroku.svg';
import netlify from '../../images/netlify.png';
import github from '../../images/git-icon.svg';
import vscode from '../../images/vscode.svg';
import meterial from '../../images/material-ui.svg';
const TechStack = () => {
    return (
        <div className='my-10 mx-12'>
            <div className='font-color text-center py-4 px-3'>
                <h1 className='text-3xl md:text-5xl font-bold py-4'>My Tech Stack</h1>
                <p className='text-2xl md:text-3xl'> Technologies I’ve been working with recently</p>
            </div>
            <div className='grid grid-cols-5 gap-4 justify-items-center items-center'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
                <img src={tailwind} alt="" />
                <img src={react} alt="" />
                <img src={node} alt="" />
                <img src={firebase} alt="" />
                <img src={mongodb} alt="" />
                <img src={github} alt="" />
                <img src={netlify} alt="" />
                <img src={vscode} alt="" />
                <img src={sass} alt="" />
                <img src={heroku} alt="" />
                <img src={meterial} alt="" />
            </div>
        </div>
    );
};

export default TechStack;