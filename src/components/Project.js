import React from 'react';
import data from '../apis/projects.json';
import GitButton from './GitButton';
import anime from 'animejs/lib/anime.es.js';

class Project extends React.Component {

    componentDidMount() {
        anime.timeline({loop: false})
            .add({
                targets: '.text',
                opacity: 1,
                duration: 10000,
                delay: 500
            });

        anime.timeline({loop: false})
            .add({
                targets: '.about-title',
                opacity: 1,
                duration: 10000,
                delay: 500
            });

        anime.timeline({loop: false})
            .add({
                targets: '.techs-list',
                opacity: 1,
                duration: 10000,
                delay: 500
            });

        anime.timeline({loop: false})
            .add({
                targets: '.project-img',
                opacity: 1,
                duration: 10000,
                delay: 500
            });

        anime.timeline({loop: false})
            .add({
                targets: '.btn',
                opacity: 1,
                duration: 10000,
                delay: 500
            });
    
        anime.timeline({loop: false})
            .add({
                targets: '.project-container',
                opacity: 1,
                duration: 10000,
                delay: 500
            });
    }

    render() {

        const { id } = this.props.match.params;
        
        return (
           <div className="container">
                <div className="project-container">
                    <h1 className="project-title">
                        {data[id-1].title}
                    </h1>
                    <hr className="hr-style-center"></hr>
                    <div className="row">
                        <div className="col span-1-of-2">
                            <img alt={data[id-1].title} className="project-img" src={require(`../img/${id}.PNG`)} />
                            <GitButton to={data[id-1].github}/>
                        </div>
                        <div className="col span-1-of-2">
                            <h4 className="about-title">About</h4>
                            <hr className="hr-style-left"></hr>
                            <p className="text">{data[id-1].description}</p>
                            <h4 className="about-title">Technical Information</h4>
                            <hr className="hr-style-left"></hr>
                            <ul className="techs-list">
                                {data[id-1].technologies.map(el => {
                                    return <li className="techs-list-item">{el}</li>
                                })}
                            </ul>
                        </div>
                    </div>
               </div>
           </div>
        );
    };
};

export default Project;

