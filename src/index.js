const h = require('../lib/h')
const mount = require('../lib/mount')
const update = require('../lib/update')

const app =
  h('div', { className: 'parent' },
    h('div', { className: 'child' },
      h('div', { className: 'grand-child', style: 'background: red'}, 'grandchild')
    )
  )

const app2 =
  h('span', { className: 'parent' },
    h('div', { className: 'child' },
      h('div', { className: 'grand-child', style: 'background: blue' }, 'grandchild 2')
    )
  )

const rootNode = document.querySelector('#root')
mount(app, rootNode)

setTimeout(function () {
  update(app, app2)
}, 2000)
