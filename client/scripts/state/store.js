'use strict';

const {
  observable, computed
} = mobx;

class AppState {
  s = {init:false,todos:[],todosCount:0}

  @observable s
  constructor(name) {
    this.s.init = true
    this.s.todos = []
    this.s.todosCount = this.s.todos.length

    mobx.autorun(() => {
      this.s.todosCount = this.s.todos.length
      console.log(this.report)
    })
  }
  
  addTodo = (todo, self) => {
    if(todo && todo.trim()){
      this.s.todos.push({status:false,item:todo})
      self.update()
    }
  }
  
  toggleTodoStatus = (todo) => {
    this.s.todos.map((item ,i ) => {
      if(item === todo){
        this.s.todos[i].status = item.status === true ? false:true
      }
    })
  }
  
  @computed get report() {
    return `Report :: progress is ` +
      `${JSON.stringify(this.s.todos)}`;
  }
  
}

module.exports = AppState;