import React from "react";
import ListShow from "./ListShow";
import "../App.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      todoList: JSON.parse(localStorage.getItem('document')) || [],
      showList: "All"
    };

  }


  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleChangeDate = e => {
    this.setState({ date: e.target.value });
   
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        {
          text: this.state.text, done: false, id: new Date().getTime(),
          deadline: this.state.date
        },
        ...this.state.todoList
      ],
      text: "",
      date: ""
    });
  };

  componentDidUpdate() {
    localStorage.setItem('document', JSON.stringify(this.state.todoList))

  }


  onDone = id => {
    const index = this.state.todoList.findIndex(todo => todo.id === id)
    this.setState(state => ({
      todoList: state.todoList.map((todo, indexTodo) => {
        if (indexTodo === index) {
          todo.done = !todo.done;
        }
        return todo;
      })
    }));
  };

  render() {
    let searchList = [];
    let newTodo = [];
    if (this.state.showList === "All") newTodo = this.state.todoList;
    else if (this.state.showList === "Done")
      newTodo = this.state.todoList.filter(todo => todo.done);
    else newTodo = this.state.todoList.filter(todo => !todo.done);

    searchList = newTodo.filter(todo => todo.text.includes(this.props.search));

    return (
      <>
        <div className="body mb-2">
          <h2 className="heading-secondary">Add New Todo</h2>
          <form onSubmit={this.handleSubmit}>
            <input required className="form-control mb-2" placeholder="Title" type="text" value={this.state.text} onChange={this.handleChange} />
            <input required className="form-control mb-2" placeholder="Date" type="date" value={this.state.date} onChange={this.handleChangeDate} />
            <button className="btn btn-secondary mb-2" type="submit">Add Todo</button>
          </form>
          <div>
            <button className="btn btn-warning" onClick={() => this.setState({ showList: "All" })}>
              All
          </button>{" "}
            <button className="btn btn-warning" onClick={() => this.setState({ showList: "Done" })}>
              Done
          </button>{" "}
            <button className="btn btn-warning" onClick={() => this.setState({ showList: "unDone" })}>
              unDone
          </button>
          </div>
          {searchList.slice(0, 10).map((todo, index) => (
            <ListShow
              key={index}
              todo={todo}
              handleDone={() => this.onDone(todo.id)}
            />
          ))}
        </div>

      </>
    );
  }
}

export default TodoForm;
