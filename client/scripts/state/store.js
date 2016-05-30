'use strict';

const {
  observable, computed
} = mobx;

class AppState {

  @observable s
  constructor(s,name) {
    this.s = s
    this.s.init = true
    this.s.todos = []
    this.s.todosCount = this.s.todos.length

    mobx.autorun(() => console.log(this.report))
  }
  
  addTodo = (todo, self) => {
    this.s.todos.push({status:false,item:todo})
    self.update()
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