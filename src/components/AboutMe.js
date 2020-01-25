import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import Button from './Button';
import { connect } from 'react-redux';
import { getLocation } from '../actions/index';

class AboutMe extends React.Component {

    componentDidMount() {
        anime.timeline({loop: false})
            .add({
                targets: '.ml10 .letter',
                rotateY: [-90, 0],
                duration: 3000,
                delay: (el, i) => 70 * i
            });

        anime.timeline({loop: false})
            .add({
                targets: '.btn',
                opacity: 1,
                duration: 10000,
                delay: 2000
            });


        anime.timeline({loop: false})
            .add({
                targets: '.text',
                opacity: 1,
                duration: 10000,
                delay: 1000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.specialty',
                opacity: 1,
                duration: 10000,
                delay: 1500
            });
        
        this.props.getLocation(this.props.match.path);
    };

    render() {
        return (
            <div className="centered-container">
                <h1 className="ml10">
                    <span className="text-wrapper">
                        <span className="letters">
                            <span className='letter namegraph'>A</span>
                            <span className='letter namegraph'>b</span>
                            <span className='letter namegraph'>o</span>
                            <span className='letter namegraph'>u</span>
                            <span className='letter namegraph'>t</span>
                            <span className='letter'>.</span>
                            <span className='letter function'>m</span>
                            <span className='letter function'>e</span>
                            <span className='letter function'>(</span>
                            <span className='letter function'>)</span>
                            <span className='letter function'>;</span>
                        </span>
                    </span>
                </h1>
                <p className="text">I am from Thessaloniki Greece, born at 1988. I studied Civil Engineering at Serres.</p>
                <p className="text">I was always into gaming and computer technology, so I started learning how to code starting with HTML.</p>
                <p className="text">Well organized and skillful with problem solving capabilities, I am here to join your team.</p>
                <p className="text">My hobbies are Gaming, Coding and Netflix.</p>
                <h4 className="specialty">Check my skills below.</h4>
                <Button name={'What can you do?'} to={'/talents'}/>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        location: state.loading.location
    };
};

export default connect(mapStateToProps, { getLocation })(AboutMe);