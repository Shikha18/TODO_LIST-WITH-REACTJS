import React, { Component } from "react";

class TodoList extends Component{
	
    state = {
        task : '',
        items : []
    }

    changeHandler = (event) => {
        
        this.setState({
            task : event.target.value
        })
    }

    handleSubmit = () => {

    }

	render(){

		return (
			<div className="todoListMain">
    			<div className="header">
        			<form onSubmit = {this.addItem} >
            			<input onChange={this.changeHandler.bind(this)} placeholder="Enter"></input>
            			<button type="submit" onSubmit={this.handleSubmit()}>Add</button>
        			</form>
    			</div>
                <p>{ this.state.task }</p>
			</div>

		);
	}
}

export default TodoList;