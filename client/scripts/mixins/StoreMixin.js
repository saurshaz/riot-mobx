'use strict'

var AppState = require('../state/store')
let s = {}
let store = new AppState(s)

module.exports = {
  // init method is a special one which can initialize
  // the mixin when it's loaded to the tag and is not
  // accessible from the tag its mixed in
  init: function (stores) {
    let self = this
    self.on('mount', () => {
      self._ = {}
      self._.state = store
      console.debug('>>> store >>> ', self._.state.s.todos)
      self.update()
    })
  }
}
