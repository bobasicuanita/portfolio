import React from 'react';
import data from '../apis/projects.json';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
        return data.map(el => {
            return ( 
            <div className={`col span-1-of-${data.length}`} key={el.id}>
                <Link to={`/projects/${el.id}`}><img className="projects-img" alt="project-pic" src={require(`../img/${el.id}.PNG`)} /></Link>
            </div>
            );
        });
};

export default ProjectsList;