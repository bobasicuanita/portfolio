import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import EmailButton from './EmailButton';
import { Field, reduxForm } from 'redux-form';
import { getLocation } from '../actions/index';
import { connect } from 'react-redux';

class Contact extends React.Component {

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
                targets: '.text',
                opacity: 1,
                duration: 10000,
                delay: 1000
            });

        anime.timeline({loop: false})
            .add({
                targets: '.form-group',
                opacity: 1,
                duration: 2000,
                delay: 2000
            });
        
        anime.timeline({loop: false})
            .add({
                targets: '.git-btn',
                opacity: 1,
                duration: 2000,
                delay: 2300
            });

        this.props.getLocation(this.props.match.path);
    };

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="error message">
                    <div className="header">{error}</div>
                </div>
            );
        };
    };

    renderFirstInput = ({ input, placeholder, meta }) => {
        return (
            <div className="field error inputfields">
                {this.renderError(meta)}
                <input className="first-input-fields" placeholder={placeholder} {...input} autoComplete="off" />
            </div>
        );
    };

    renderSecondInput = ({ input, placeholder, meta }) => {
        return (
            <div className="field error inputfields">
                {this.renderError(meta)}
                <input className="input-margin first-input-fields" placeholder={placeholder} {...input} autoComplete="off" />
            </div>
        );
    };

    renderThirdInput = ({ input, placeholder, meta }) => {
        return (
            <div className="field error">
                <input className="second-input-fields" placeholder={placeholder} {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    renderTextarea = ({ input, placeholder, meta }) => {
        return (
            <div className="field error">
                <textarea className="second-input-fields" placeholder={placeholder} {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    render() {
        return (
            <div className="centered-container">
                <h1 className="ml10">
                    <span className="text-wrapper">
                        <span className="letters">
                            <span className='letter namegraph'>C</span>
                            <span className='letter namegraph'>o</span>
                            <span className='letter namegraph'>n</span>
                            <span className='letter namegraph'>t</span>
                            <span className='letter namegraph'>a</span>
                            <span className='letter namegraph'>c</span>
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
                <p className="text">I am interested in either local or remote job opportunities or freelance projects. <br />Contact me for anything you might need to ask me.</p>
                <form className="form-group error" method="POST" action="https://www.enformed.io/n6sch09u" encType="multipart/form-data">
                    <Field name="name" component={this.renderFirstInput} placeholder="Name"/>
                    <Field name="email" component={this.renderSecondInput} placeholder="Email"/>
                    <Field name="subject" component={this.renderThirdInput} placeholder="Subject"/>
                    <Field name="message" component={this.renderTextarea} placeholder="Message"/>
                    <input type="hidden" name="*redirect" value="http://localhost:3000/" />
                    <EmailButton />
                </form>
            </div>
        );
    };
};

const validate = formValues => {

    const errors = {};

    if (!formValues.name) {
        errors.name = 'You must enter your name.';
    };

    if(!formValues.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'You must enter a valid email.';
    };

    if (!formValues.subject) {
        errors.subject = 'You must enter your subject.';
    };

    if(!formValues.message) {
        errors.message = 'You must enter a message.';
    };

    return errors;
};

const mapStateToProps = state => {
    return {
        location: state.loading.location
    };
};

Contact = connect(mapStateToProps, { getLocation })(Contact);

export default reduxForm({
    form: 'Contact',
    validate: validate
})(Contact);