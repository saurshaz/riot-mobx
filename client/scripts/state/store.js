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

    mobx.autorun(() => {
      this.s.todosCount = this.s.todos.length
      let cnt = 0
      this.s.todos.map((item, i) => {
        cnt = (item.status === true) ? cnt++ : cnt
      })
      this.s.finishedCount = cnt

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
  }
  
  @computed get report() {
    return `Report :: progress is ` +
      `${JSON.stringify(this.s.todos)}`;
  }
  
}

module.exports = AppState;