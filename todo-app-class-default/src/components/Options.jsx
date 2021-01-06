import React, { Component } from 'react';
import Option  from './Option'

class Options extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.OnremoveAll}>Remove all</button>
            {
                
            this.props.options.map((option)=>{
                return(
                    <Option key={option} option={option} />
                )
           

            })
        }
            </div>
        );
    }
}

export default Options;