import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleForm= this.handleForm.bind(this)
        this.state={
        error:undefined
        }
    }
    
    
    handleForm(event){
        
        console.log("form submiteed");
        console.log(event.target.elements.title.value);
        const opt=event.target.elements.title.value;
        const error=this.props.onAdd(opt);
    
            this.setState(()=>{
               return this.state.error=error;
            })
            
        

        event.preventDefault();
        
    }


    render() {
        return (
            <div>
            {this.state.error &&<p>{this.state.error}</p>}
            <form onSubmit={this.handleForm.bind(this)}>
            <input name="title"></input>
            <button>Submit</button>
            
            </form>
                
            </div>
        );
    }
}

export default Form;