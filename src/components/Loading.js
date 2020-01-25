import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLoading, changeLocation, getLocation } from '../actions/index';


class Loading extends React.Component {

    componentDidMount() {
        let progress = 0
        this.dynamicBar(progress);

        this.props.getLocation(this.props.match.path);
    };

    dynamicBar(progress) {
        if (this.props.loadingWidth === 0) {
            progress = 1;
            let id = setInterval(() => {
                if(this.props.loadingWidth >= 300) {
                    clearInterval(id);
                    progress = 0;
                    this.props.startLoading(progress);
                } else {
                    progress += 3;
                    this.props.startLoading(progress);
                }
            }, 15);
        }

    };

    render() {

        if (this.props.loadingWidth === 301 && this.props.firstload) {
            this.props.changeLocation();
            return <Redirect to={'/start'} />
        } else if (this.props.loadingWidth === 301 && this.props.firstload === false) {
            return <Redirect to={this.props.location.state.to} />
        }

        return (
            <div className="loading-area">
            <h3 className="loading-title">Loading... {Math.floor(this.props.loadingWidth / 3)} %</h3>
                <div className="loading-container">
                    <div style={{ width:this.props.loadingWidth }} className="loading-bar"></div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loadingWidth: state.loading.loadingWidth,
        firstload: state.loading.firstload
    };
};

export default connect(mapStateToProps, { startLoading, changeLocation, getLocation })(Loading);