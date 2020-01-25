import React from 'react';

class GitButton extends React.Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer" href={`${this.props.to}`} className="btn git-btn">View Code <i class="fab fa-github"></i></a>
        );
    };
};

export default GitButton;