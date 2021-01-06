import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import Options from './Options'

class Todo extends Component {
    constructor(props) {
     
        super(props);
        this.state={
            options:props.options
            //options:['one1','two2','three3']
        }
        this.OnremoveAll= this.OnremoveAll.bind(this);
    } 
    

     Onadd(option) {
         if(!option){
             return "empty list not allowed";
         }
         else if(this.state.options.indexOf(option)>-1)
         {
             return 'list already exsit';
         }
         this.setState((prevState)=>{
             return {
                 options:[...prevState.options,option]
             }

         })
         
        
    }
    OnremoveAll(){
             this.setState(()=>{
                 return{
                     options:[]
                 }
             })
         }
    render() {
        const title='todo app';
        const subtitle='put your life in hands of computer!';
        return (
            <div>
            <Header  title={title} subtitle={subtitle}/>
            {
                <Options key={this.state.options}  options={this.state.options} OnremoveAll={this.OnremoveAll} />
               
            }
           
            <Form onAdd={this.Onadd.bind(this)} />
            <Footer />
                
            </div>
        );
    }
}

Todo.defaultProps={
    options:[11,,22,33]
}

export default Todo;