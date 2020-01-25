import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStartClass, addAboutmeClass, addTalentsClass, addProjectsClass, addContactClass, removeStartClass, removeAboutmeClass, removeTalentsClass, removeProjectsClass, removeContactClass } from '../actions/index';

class Header extends React.Component {

    componentDidMount() {
        if (this.props.location === '/start') {
            this.props.addStartClass();
        };
    };

    componentDidUpdate() {
        if (this.props.location === '/start') {
            this.props.addStartClass();
            this.props.removeStartClass();
        };

        if (this.props.location === '/aboutme') {
            this.props.addAboutmeClass();
            this.props.removeAboutmeClass();
        };

        if (this.props.location === '/talents') {
            this.props.addTalentsClass();
            this.props.removeTalentsClass();
        };

        if (this.props.location === '/projects') {
            this.props.addProjectsClass();
            this.props.removeProjectsClass();
        };

        if (this.props.location === '/contact') {
            this.props.addContactClass();
            this.props.removeContactClass();
        };
    };

    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <ul className="navlist">
                        <Link to={{pathname: '/', state: { to: "/start" } }}><li className={this.props.startClassName}>Start</li></Link>
                        <Link to={{pathname: '/', state: { to: "/aboutme" } }}><li className={this.props.aboutmeClassName}>About Me</li></Link>
                        <Link to={{pathname: '/', state: { to: "/talents" } }}><li className={this.props.talentsClassName}>Skills</li></Link>
                        <Link to={{pathname: '/', state: { to: "/projects" } }}><li className={this.props.projectsClassName}>Projects</li></Link>
                        <Link to={{pathname: '/', state: { to: "/contact" } }}><li className={this.props.contactClassName}>Contact</li></Link>
                    </ul>
                    <ul className="contact-list">
                        <li className="contact-item"><a href="https://www.facebook.com/KostasInTrance" target="_blank" rel="noopener noreferrer" className="font"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="contact-item"><a href="https://www.instagram.com/konstantinos_karasavvas/" target="_blank" rel="noopener noreferrer"  className="font"><i className="fab fa-instagram"></i></a></li>
                        <li className="contact-item"><a href="https://www.linkedin.com/in/konstantinos-karasavvas-webdev/" target="_blank" rel="noopener noreferrer"  className="font"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </nav>
            </Fragment>
        );
    };
};
const mapStateToProps = state => {
    return {
        startClassName: state.header.startClassName,
        aboutmeClassName: state.header.aboutmeClassName,
        talentsClassName: state.header.talentsClassName,
        projectsClassName: state.header.projectsClassName,
        contactClassName: state.header.contactClassName,
        location: state.loading.location
    };
};

export default connect(mapStateToProps, { addStartClass, addAboutmeClass, addTalentsClass, addProjectsClass, addContactClass, removeStartClass, removeAboutmeClass, removeTalentsClass, removeProjectsClass, removeContactClass  })(Header);