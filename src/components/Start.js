import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import Button from './Button';
import { connect } from 'react-redux';
import { getLocation } from '../actions/index';

class Start extends React.Component {

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
                targets: '.specialty',
                opacity: 1,
                duration: 10000,
                delay: 2000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.btn',
                opacity: 1,
                duration: 10000,
                delay: 2000
            });
            
            this.props.getLocation(this.props.match.path);
    };


    render() {
        return (
            <div>
                <div className="centered-container">
                    <h1 className="ml10">
                        <span className="text-wrapper">
                            <span className="letters">
                                <span className='letter'>H</span>
                                <span className='letter'>i</span>
                                <span className='letter'>,</span>
                                <span className='letter'>&nbsp;</span>
                                <br />
                                <span className='letter'>I</span>
                                <span className='letter'>&nbsp;</span>
                                <span className='letter'>a</span>
                                <span className='letter'>m</span>
                                <span className='letter'>&nbsp;</span>
                                <span className='letter namegraph'>K</span>
                                <span className='letter namegraph'>o</span>
                                <span className='letter namegraph'>n</span>
                                <span className='letter namegraph'>s</span>
                                <span className='letter namegraph'>t</span>
                                <span className='letter namegraph'>a</span>
                                <span className='letter namegraph'>n</span>
                                <span className='letter namegraph'>t</span>
                                <span className='letter namegraph'>i</span>
                                <span className='letter namegraph'>n</span>
                                <span className='letter namegraph'>o</span>
                                <span className='letter namegraph'>s</span>
                                <br />
                                <span className='letter'>a</span>
                                <span className='letter'>n</span>
                                <span className='letter'>d</span>
                                <span className='letter'>&nbsp;</span>
                                <span className='letter'>I</span>
                                <span className='letter'>&nbsp;</span>
                                <span className='letter'>l</span>
                                <span className='letter'>o</span>
                                <span className='letter'>v</span>
                                <span className='letter'>e</span>
                                <span className='letter'>&nbsp;</span>
                                <span className='letter'>t</span>
                                <span className='letter'>o</span>
                                <span className='letter'>.</span>
                                <span className='letter function'>c</span>
                                <span className='letter function'>o</span>
                                <span className='letter function'>d</span>
                                <span className='letter function'>e</span>
                                <span className='letter function'>(</span>
                                <span className='letter function'>)</span>
                                <span className='letter function'>;</span>
                            </span>
                        </span>
                    </h1>
                    <h4 className="specialty">Front-End Web Developer | React Developer</h4>
                    <Button name={'Tell me more about yourself.'} to={'/aboutme'} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        location: state.loading.location
    };
};

export default connect(mapStateToProps, { getLocation })(Start);