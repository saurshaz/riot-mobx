'use strict'

var AppState = require('../state/store')

module.exports = {
  // init method is a special one which can initialize
  // the mixin when it's loaded to the tag and is not
  // accessible from the tag its mixed in
  init: function (stores) {
    let self = this
    self.on('mount', () => {
      let store = new AppState()
      self._ = {}
      self._.state = (self.opts && self.opts.state) || store
      self.update()
    // console.debug('>>> store >>> ', self._.state.s.todos)
    })
  }
}
