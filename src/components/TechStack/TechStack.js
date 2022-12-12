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
        <div id='techState' className='my-10 mx-12 top-5'>
            <div className='font-color text-center py-4 px-3' data-aos="zoom-out-right">
                <h1 className='text-3xl md:text-5xl font-bold py-4'>My Tech Stack</h1>
                <p className='text-2xl md:text-3xl'> Technologies I’ve been working with recently</p>
            </div>
            <div className='grid grid-cols-5 gap-4 justify-items-center items-center'>
                <img src={html} alt="" data-aos="zoom-in" />
                <img src={css} alt="" data-aos="zoom-in-right" />
                <img src={js} alt="" data-aos="zoom-in" />
                <img src={bootstrap} alt="" data-aos="zoom-in-right" />
                <img src={tailwind} alt="" data-aos="zoom-in" />
                <img src={react} alt="" data-aos="zoom-in-right" />
                <img src={node} alt="" data-aos="zoom-in" />
                <img src={firebase} alt="" data-aos="zoom-in-right" />
                <img src={mongodb} alt="" data-aos="zoom-in" />
                <img src={github} alt="" data-aos="zoom-in-right" />
                <img src={netlify} alt="" data-aos="zoom-in" />
                <img src={vscode} alt="" data-aos="zoom-in-right" />
                <img src={sass} alt="" data-aos="zoom-in" />
                <img src={heroku} alt="" data-aos="zoom-in-right" />
                <img src={meterial} alt="" data-aos="zoom-in" />
            </div>
        </div>
    );
};

export default TechStack;