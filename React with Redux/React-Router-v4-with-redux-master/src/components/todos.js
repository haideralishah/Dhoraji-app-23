import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodotoFirebase } from '../store/actions/authaction';
import Tododetails from './tododetail'


class Todos extends Component {
    state = {
        username: '',
        todoInput: '',
        allTodos: this.props.allTodos
    }
    userInput(event) {
        this.setState({
            username: event.target.value
        })
    }

    todoHandler(event) {
        this.setState({
            todoInput: event.target.value
        })
    }

    addTodo() {
        this.props.addTodotoFirebase(this.state.todoInput, this.props.currentUserUid);
    }


    static getDerivedStateFromProps(nextProps, nextstate) {
        console.log(nextProps)

        return {
            allTodos: nextProps.allTodos,
        }

    }

    render() {
        console.log(this.state.allTodos)
        return (
            <div>
                <h1>Hello World {this.props.currentUserName}</h1>
                <h1>{this.props.curretUserEmail}</h1>
                Add Todo: <input type='text' name="todo" value={this.state.todoInput} onChange={this.todoHandler.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>

                {
                    this.state.allTodos.map((todo, index) => {
                        <h1>todo.todo</h1>
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentUserName: state.basicInfo.username,
        curretUserEmail: state.basicInfo.email,
        currentUserUid: state.basicInfo.uid,
        allTodos: state.basicInfo.allTodos

    }
}

function mapDispatchToProps(dispatch) {
    return ({
        addTodotoFirebase: (todo, uid) => {
            dispatch(addTodotoFirebase(todo, uid))
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);













































