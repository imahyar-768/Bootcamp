import React, { Component } from 'react';
import TodoForm from './TodoForm';
import "../App.css";

export default class SearchItem extends Component {
    state = { text: "" };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <h2 className="heading-logo">My Todo List</h2>
                <form className="form-search" onSubmit={this.handleSubmit}>
                    <input className="form-control" value={this.state.text} onChange={this.handleChange} />
                    
                    <button className="btn btn-success">Search</button>
                </form>
                <TodoForm search={this.state.text} />
            </div>
        )
    }
}
