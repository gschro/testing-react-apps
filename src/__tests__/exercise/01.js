// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

const click = el =>
  el.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    }),
  )

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  ReactDOM.render(<Counter />, div)

  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')

  click(increment)
  expect(message.textContent).toBe('Current count: 1')

  click(decrement)
  expect(message.textContent).toBe('Current count: 0')

  div.remove()
})

/* eslint no-unused-vars:0 */
