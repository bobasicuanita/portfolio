import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import Button from './Button';
import TalentsList from './TalentsList';
import { connect } from 'react-redux';
import { getLocation } from '../actions/index';

class Talents extends React.Component {

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
                delay: 1300
            });


        anime.timeline({loop: false})
            .add({
                targets: '.skill-item',
                opacity: 1,
                duration: 3000,
                delay: (el, i) => 70 * i
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
                targets: '.ml10',
                opacity: 1,
                duration: 10000,
                delay: 1000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.specialty',
                opacity: 1,
                duration: 10000,
                delay: 1000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.roadmap-title',
                opacity: 1,
                duration: 10000,
                delay: 1000
            });

        this.props.getLocation(this.props.match.path);
    };

    render() {
        return (
                <div className="container">
                    <h1 className="ml10 skills-title">
                        <span className="text-wrapper">
                            <span className="letters">
                                <span className='letter function'>c</span>
                                <span className='letter function'>o</span>
                                <span className='letter function'>n</span>
                                <span className='letter function'>s</span>
                                <span className='letter function'>o</span>
                                <span className='letter function'>l</span>
                                <span className='letter function'>e</span>
                                <span className='letter'>.</span>
                                <span className='letter function'>l</span>
                                <span className='letter function'>o</span>
                                <span className='letter function'>g</span>
                                <span className='letter function'>(</span>
                                <span className='letter namegraph'>s</span>
                                <span className='letter namegraph'>k</span>
                                <span className='letter namegraph'>i</span>
                                <span className='letter namegraph'>l</span>
                                <span className='letter namegraph'>l</span>
                                <span className='letter namegraph'>s</span>
                                <span className='letter function'>)</span>
                                <span className='letter function'>;</span>
                            </span>
                        </span>
                    </h1>
                    <div className="row">
                        <div className="col span-1-of-2">
                            <div className="skills">
                                <TalentsList />
                            </div>

                        </div>
                        <div className="col span-1-of-2">
                            <h1 className="roadmap-title">Roadmap</h1>
                            <p className="text">
                                At the moment I am improving on the Frond-end side of web development by trying to
                                improve my Javascript, React and CSS skills and I try to add as many projects around
                                these technologies as possible trying to do new things that i have not done before.<br />
                                Also adding new techs to my skillset like SASS, d3.js , Canvas, TensorFlowJS, Phazer e.t.c.
                            </p>
                            <p className="text">
                                Though, Back-End Web development will be soon to my skillset by learning and practicing technologies<br />
                                like NodeJS, MongoDB and SQL in order to become a Full-Stack MERN Developer.
                            </p>
                        </div>
                    </div>
                    <div className="action">
                        <h4 className="specialty">Check my projects.</h4>
                        <Button name={'Show me what you have done.'} to={'/projects'} />
                    </div>
                </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        location: state.loading.location
    };
};

export default connect(mapStateToProps, { getLocation })(Talents);
