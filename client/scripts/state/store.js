'use strict';

const {
  observable, computed
} = mobx;

class AppState {
  s = {init:false,todos:[],todosCount:0,finishedCount:0}

  @observable s
  constructor(name) {
    this.s.init = true
    this.s.todos = []
    this.s.todosCount = this.s.todos.length
    this.s.finishedCount = 0

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
  
  toggleTodoStatus = (todo, self) => {
    event.item.todo.status=!event.item.todo.status
    this.s.finishedCount = this.finishedCount
    console.log(this.s.finishedCount)
    self.update()
  }
  
  @computed get report() {
    return `Report :: progress is ` +
      `${JSON.stringify(this.s.todos)}`;
  }

  @computed get finishedCount() {
    let cnt = 0
    this.s.todos.map((item, i) => {
      cnt = (item.status == true) ? cnt + 1 : cnt
    })
    return cnt
  }
  
}

module.exports = AppState;