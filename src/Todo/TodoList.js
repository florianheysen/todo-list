import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div>
                    <div className="todo-list__item" key={item}>
                        <div className="todo-list__item-content">
                            {item} <button className="btn-del" onClick={this.deleteTodo.bind(this, item)}>🗑️</button>
                        </div>
                    </div>    
                </div>
            );
        });
    }

    render() {
        return(
            <div class="app">
                <form class="form">
                    <input className="input form__input" value={this.state.userInput} type="text" placeholder="Tâche" onChange={this.onChange.bind(this)}/>
                    <button className="btn form__submit-btn" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>

            <div>
     {this.renderTodos()}
 </div>
            </div>
        );
    }
}

export default TodoList;