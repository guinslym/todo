import React, { Component } from "react";
import { Container, Subscribe } from "unstated";
import uuidv4 from "uuid/v4";

function createTodo(todo) {
  return {
    id: uuidv4(),
    name: todo.trim(),
    active: true
  };
}

class TodoAppContainer extends Container {
  state = {
    todos: [],
    filter: "all",
    remaining: 0
  };

  addTodo(todo) {
    this.setState({
      todos: [createTodo(todo), ...this.state.todos],
      remaining: this.state.remaining + 1
    });
  }

  setFilter(filter) {
    if (this.state.filter !== filter) {
      this.setState({ filter });
    }
  }

  toggleTodo(id) {
    const { todos } = this.state;
    const target = todos.find(todo => todo.id === id);
    target.active = !target.active;

    this.setState({
      todos
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  editTodo(id, value) {
    const { todos } = this.state;
    const target = todos.find(todo => todo.id === id);
    target.name = value;

    this.setState({
      todos
    });
  }

  completeAll() {

  }

  clearCompleted() {

  }
}

function Filters() {
  return (
    <Subscribe to={[TodoAppContainer]}>
      {app => (
        <div>
          <button type="button" onClick={() => app.setFilter("all")}>
            All
          </button>
          <button type="button" onClick={() => app.setFilter("active")}>
            Active
          </button>
          <button type="button" onClick={() => app.setFilter("completed")}>
            Completed
          </button>
        </div>
      )}
    </Subscribe>
  );
}

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.todo = props.todo;
    this.state = {
      value: this.todo.name
    };
  }

  render() {
    return (
      <Subscribe to={[TodoAppContainer]}>
        {app => (
          <div key={this.todo.id}>
            <form
              onSubmit={event => {
                event.preventDefault();
                app.editTodo(this.todo.id, this.state.value);
              }}
            >
              <input
                checked={!this.todo.active}
                type="checkbox"
                onChange={() => app.toggleTodo(this.todo.id)}
              />
              <input
                type="text"
                value={this.state.value}
                onChange={event => {
                  this.setState(
                    { value: event.target.value },
                    app.editTodo(this.todo.id, this.state.value)
                  );
                }}
              />
            </form>

            <button type="button" onClick={() => app.deleteTodo(this.todo.id)}>
              Delete
            </button>
          </div>
        )}
      </Subscribe>
    );
  }
}

class TodoApp extends Component {
  state = {
    value: ""
  };

  handleChange = event => this.setState({ value: event.target.value });
  handleSubmit = () => this.setState({ value: "" });

  render() {
    return (
      <Subscribe to={[TodoAppContainer]}>
        {app => (
          <div>
            <h1>Todo App</h1>
            <Filters />
            <form
              onSubmit={event => {
                event.preventDefault();
                app.addTodo(this.state.value);
                this.handleSubmit(event);
              }}
            >
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type="submit" value="Create Todo" />
            </form>

            {app.state.todos
              .filter(
                todo =>
                  app.state.filter === "all" ||
                  (todo.active && app.state.filter === "active") ||
                  (!todo.active && app.state.filter === "completed")
              )
              .map(todo => <TodoItem key={todo.id} todo={todo} />)}
          </div>
        )}
      </Subscribe>
    );
  }
}

export default TodoApp;
