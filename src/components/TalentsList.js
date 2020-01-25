import React from 'react';
import data from '../apis/skills.json';
import anime from 'animejs/lib/anime.es.js';
import { connect } from 'react-redux';
import { changeWidth } from '../actions/index';

class TalentsList extends React.Component {

    componentDidMount() {
        anime.timeline({loop: false})
            .add({
                targets: '.skill-tab',
                opacity: 1,
                duration: 10000,
                delay: 800
            });

    const xsm = window.matchMedia("(max-width: 500px)");
    const sm = window.matchMedia("(max-width: 767px)");
    const md = window.matchMedia("(max-width: 1024px)");
    const lg = window.matchMedia("(max-width: 1280px)");
    const xlg = window.matchMedia("(min-width: 1281px)");


    this.checkWidth = () => {
        if (xsm.matches) {
            this.props.changeWidth(1.9);
        } else if (sm.matches) {
            this.props.changeWidth(3);
        } else if (md.matches) {
            this.props.changeWidth(2.5);
        } else if (lg.matches) {
            this.props.changeWidth(3.2);
        } else if (xlg.matches) {
            this.props.changeWidth(4);
        }
    };

    window.addEventListener("resize", this.checkWidth);

    };

    render() {
        return data.map(el => {
            return (
                <div key={el.id} className="skill-tab">
                    <div className="skill-name"><span className="skill-name_name">{el.skill}</span></div>
                    <div className="skill-progress" style={{ width: el.percentage * this.props.width }}><span className="skill-percentage">{`${el.percentage}%`}</span></div>
                </div>
            );
        });
    };
};

const mapStatetoProps = state => {
    return {
        width: state.media.width
    }
};

export default connect(mapStatetoProps, { changeWidth })(TalentsList);