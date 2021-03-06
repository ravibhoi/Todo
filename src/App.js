import { Component } from "react";
import TodoTable from "./component/TodoTable";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        tableData : []
    }
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((jsonData) => this.setState({
          tableData : jsonData
      }));
  }

  sortHandler = (event) => {
      let dataArray = this.state.tableData
      let data = dataArray.sort((a, b) => {
        return Number(b.id) - Number(a.id)
      })
      this.setState({
        tableData : data
      })
  }
  render(){
    return (
      <>
        <TodoTable todoList = {this.state.tableData} sortTable = {this.sortHandler}/>
      </> 
    )
  }
}

export default App;
