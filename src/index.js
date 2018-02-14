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
      h('div', { className: 'text' }, state.value)
    )
  )

const app2 = (state) =>
  h('span', { className: 'parent' },
    h('div', { className: 'child' },
      h('input', { className: 'grand-child', onkeydown: function (e) { state.value = e.target.value } }),
      h('div', { className: 'text' }, state.value)
    )
  )

const rootNode = document.querySelector('#root')
const oldState = {
  ...state
}

mount(app(state), rootNode)

/**
 * Esto así como está debería funcionar pq le estoy pasando diferentes props
 * por lo que debería mostrarlas
 *
 * Otra cosa que me falta es la referencia al dom node. qué hago con ese return?
 *
 * El paso siguiente es que un evento de un component dispare un cambio en el state
 * igual que en la función setState en React
 */

setTimeout(function () {
  console.log(oldState, state)
  update(app(oldState), app2(state))
}, 2000)
