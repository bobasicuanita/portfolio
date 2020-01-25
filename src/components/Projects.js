import React from 'react';
import anime from 'animejs'
import ProjectsList from './ProjectsList';
import Button from './Button';
import { connect } from 'react-redux';
import { getLocation } from '../actions/index';

class Projects extends React.Component {

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
                targets: '.projects-layout',
                opacity: 1,
                duration: 3000,
                delay: 1500
            });

        anime.timeline({loop: false})
            .add({
                targets: '.specialty',
                opacity: 1,
                duration: 3000,
                delay: 2000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.btn',
                opacity: 1,
                duration: 3000,
                delay: 2000
            });

        this.props.getLocation(this.props.match.path);
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="ml10 projects-title">
                        <span className="text-wrapper">
                            <span className="letters">
                                <span className='letter namegraph'>a</span>
                                <span className='letter namegraph'>x</span>
                                <span className='letter namegraph'>i</span>
                                <span className='letter namegraph'>o</span>
                                <span className='letter namegraph'>s</span>
                                <span className='letter'>.</span>
                                <span className='letter function'>g</span>
                                <span className='letter function'>e</span>
                                <span className='letter function'>t</span>
                                <span className='letter function'>(</span>
                                <span className='letter function'>p</span>
                                <span className='letter function'>r</span>
                                <span className='letter function'>o</span>
                                <span className='letter function'>j</span>
                                <span className='letter function'>e</span>
                                <span className='letter function'>c</span>
                                <span className='letter function'>t</span>
                                <span className='letter function'>s</span>
                                <span className='letter function'>)</span>
                                <span className='letter function'>;</span>
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="projects-layout">
                    <div className="row">
                        <ProjectsList />
                    </div>
                    <div className="action">
                        <h4 className="specialty">Contact me.</h4>
                        <Button name={'How can I reach you?'} to={'/contact'} />
                    </div>
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

export default connect(mapStateToProps, { getLocation })(Projects);