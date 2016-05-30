'use strict';

const {
  observable, computed
} = mobx;

class AppState {
  state =  {animals:[],todos:{}}
  
  @observable state
  constructor(name) {
    this.state.todos = []
    mobx.autorun(() => console.log(this.report))
  }
  
  addTodo = (todo) => {
    this.state.todos.push({status:false,item:todo})
  }
  
  toggleTodoStatus = (todo) => {
    this.state.todos.map((item ,i ) => {
      if(item === todo){
        this.state.todos[i].status = item.status === true ? false:true
      }
    })
  }
  
  @computed get report() {
    return `Report :: progress is ` +
      `${JSON.stringify(this.state.todos)}`;
  }
}

module.exports = AppState;