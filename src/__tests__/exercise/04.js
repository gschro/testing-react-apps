// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  userEvent.type(username, 'myusername')
  userEvent.type(password, 'monkey123')
  userEvent.click(screen.getByText('Submit'))

  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'myusername',
    password: 'monkey123',
  })
})

/*
eslint
  no-unused-vars: "off",
*/
