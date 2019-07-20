import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, saveEditTodoinDB } from '../store/actions/authaction';

class Tododetails extends Component {
    state = {
        edit: false,
        edittodoInput: ''
    }
    deleteTodo() {
        console.log('delete called', this.props.todoDetails)
        this.props.deleteTodo(this.props.todoDetails);
    }

    editTodo() {
        console.log('edit called', this.props.todoDetails)
        this.setState({
            edit: true,
            edittodoInput: this.props.todoDetails.todo
        })
    }
    edittodoHandler(event) {
        this.setState({
            edittodoInput: event.target.value
        })
    }
    saveEditedTodo() {
        console.log(this.state.edittodoInput, this.props.todoDetails);
        let editedObj = {
            docId: this.props.todoDetails.docId,
            uid: this.props.todoDetails.uid,
            todoInput: this.state.edittodoInput
        }

        this.props.saveEditTodoinDB(editedObj);
        this.setState({
            edit: false,
            edittodoInput: ''
        })
    }
    render() {
        return (
            (this.state.edit) ? (
                <div>
                    Edit Todo: <input type='text' name="todo" value={this.state.edittodoInput} onChange={this.edittodoHandler.bind(this)} />
                    <button onClick={this.saveEditedTodo.bind(this)}>Save</button>
                </div>
            ) : (
                    <div>
                        <b>{this.props.todoDetails.todo}</b>
                        <button onClick={this.deleteTodo.bind(this)}>Delete</button>
                        <button onClick={this.editTodo.bind(this)}>Edit</button>
                    </div >
                )

        )
    }
}



function mapDispatchToProps(dispatch) {
    return ({
        deleteTodo: (delTodo) => {
            dispatch(deleteTodo(delTodo))
        },
        saveEditTodoinDB: (editTodo) => {
            dispatch(saveEditTodoinDB(editTodo))
        }

    })
}


export default connect(null, mapDispatchToProps)(Tododetails);













































