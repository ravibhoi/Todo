import React, { Component } from 'react';

class TodoTable extends Component{
    render(){
        return(
            <>
            <table class="table">
            <thead>
                <tr>
                <th scope="col" onClick={this.props.sortTable}>User Id</th>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {
                this.props.todoList.map((item, index) => {
                    return(
                    <tr key = {item.id} >
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed === true ? "Completed" : "ToDo"}</td>
                    </tr>
                    )
                })
            }
            </tbody>    
            </table>    
            </>
        )
    }
}
export default TodoTable;