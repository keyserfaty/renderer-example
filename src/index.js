const h = require('../lib/h')
const mount = require('../lib/mount')
const update = require('../lib/update')

let state = {
  value: ''
}

const app = (state) =>
  h('span', { className: 'parent' },
    h('div', { className: 'child' },
      h('input', { className: 'grand-child', onkeydown: function (e) { state.value = e.target.value } }),
      h('div', { className: 'text' }, 'some text')
    )
  )

const app2 = (state) =>
  h('span', { className: 'parent' },
    h('span', { className: 'child' },
      h('input', { className: 'grand-child', onkeydown: function (e) { state.value = e.target.value } }),
      h('div', { className: 'text' }, 'some text 2'),
      h('div', { className: 'text' }, 'some text 3')
    )
  )

const rootNode = document.querySelector('#root')

const appRef = app(state) // otherwise i lose reference to oldElement
mount(appRef, rootNode)

setTimeout(function () {
  update(appRef, app2(state))
}, 5000)
