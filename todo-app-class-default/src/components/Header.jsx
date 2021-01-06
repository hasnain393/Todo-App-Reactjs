import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <div>
        
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

Header.defaultProps={
    title:'something default'
}
export default Header;