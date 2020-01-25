import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router-dom';
import Start from './Start';
import AboutMe from './AboutMe';
import Talents from './Talents';
import Projects from './Projects';
import Project from './Project';
import Contact from './Contact';
import Loading from './Loading';
import history from '../history';


class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Loading} />
                        <Route path="/start" exact component={Start} />
                        <Route path="/aboutme" exact component={AboutMe} />
                        <Route path="/talents" exact component={Talents} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/projects/:id" exact component={Project} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
            </Router>
        );
    };
};

export default App;